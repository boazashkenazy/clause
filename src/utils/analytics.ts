/**
 * Custom Analytics Service
 * Sends user engagement events to Azure Blob Storage via Netlify Function
 */

export interface AnalyticsEvent {
  eventType: string;
  eventData?: Record<string, any>;
  page?: string;
  sessionId?: string;
}

interface UTMParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

class AnalyticsService {
  private userId: string;
  private sessionId: string;
  private sessionStart: number;
  private isInitialized: boolean = false;
  private endpoint: string;
  private isNewVisitor: boolean;
  private firstVisitTimestamp: string;
  private entryPage: string;
  private previousPage: string | null = null;
  private eventSequence: number = 0;
  private utmParams: UTMParams = {};

  constructor() {
    // Get or create persistent user ID
    this.userId = this.getUserId();

    // Check if this is a new visitor
    this.isNewVisitor = !localStorage.getItem('clause_has_visited');

    // Get or set first visit timestamp
    const storedFirstVisit = localStorage.getItem('clause_first_visit');
    if (storedFirstVisit) {
      this.firstVisitTimestamp = storedFirstVisit;
    } else {
      this.firstVisitTimestamp = new Date().toISOString();
      localStorage.setItem('clause_first_visit', this.firstVisitTimestamp);
    }

    // Mark that user has visited
    localStorage.setItem('clause_has_visited', 'true');

    // Generate unique session ID
    this.sessionId = this.generateSessionId();
    this.sessionStart = Date.now();

    // Capture entry page
    this.entryPage = window.location.pathname;

    // Capture UTM parameters
    this.utmParams = this.getUTMParams();

    // Determine endpoint based on environment
    this.endpoint = import.meta.env.DEV
      ? 'http://localhost:8888/.netlify/functions/analytics'
      : '/.netlify/functions/analytics';
  }

  /**
   * Get or create persistent user ID
   */
  private getUserId(): string {
    let userId = localStorage.getItem('clause_user_id');
    if (!userId) {
      userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('clause_user_id', userId);
    }
    return userId;
  }

  /**
   * Generate a unique session ID
   */
  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Extract UTM parameters from URL
   */
  private getUTMParams(): UTMParams {
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get('utm_source') || undefined,
      utmMedium: params.get('utm_medium') || undefined,
      utmCampaign: params.get('utm_campaign') || undefined,
      utmTerm: params.get('utm_term') || undefined,
      utmContent: params.get('utm_content') || undefined,
    };
  }

  /**
   * Get session duration in seconds
   */
  private getSessionDuration(): number {
    return Math.floor((Date.now() - this.sessionStart) / 1000);
  }

  /**
   * Send analytics event to backend
   */
  async track(eventType: string, eventData?: Record<string, any>): Promise<void> {
    try {
      // Increment event sequence
      this.eventSequence++;

      const event: AnalyticsEvent = {
        eventType,
        eventData: {
          ...eventData,
          sessionDuration: this.getSessionDuration(),
        },
        page: window.location.pathname,
        sessionId: this.sessionId,
      };

      // Add comprehensive context
      const payload = {
        ...event,
        // User identity
        userId: this.userId,
        isNewVisitor: this.isNewVisitor,
        firstVisitTimestamp: this.firstVisitTimestamp,

        // Session context
        sessionStart: new Date(this.sessionStart).toISOString(),
        eventSequence: this.eventSequence,

        // Navigation context
        entryPage: this.entryPage,
        previousPage: this.previousPage,
        referrer: document.referrer || 'direct',
        ...this.utmParams,

        // Device context
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,

        // Timestamp
        timestamp: new Date().toISOString(),
      };

      // Send to Netlify Function (non-blocking)
      await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true, // Keep request alive even if page unloads
      }).catch(err => {
        // Silent fail - don't break user experience
        console.warn('Analytics tracking failed:', err);
      });

    } catch (error) {
      console.warn('Analytics error:', error);
    }
  }

  /**
   * Track page navigation
   */
  trackPageNavigation(toPage: string, fromPage: string): void {
    this.previousPage = fromPage;
    this.track('page_navigation', {
      fromPage,
      toPage,
      path: toPage,
    });
  }

  /**
   * Initialize automatic page tracking
   */
  initPageTracking(): void {
    if (this.isInitialized) return;
    this.isInitialized = true;

    // Track page view
    this.track('page_view', {
      path: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
    });

    // Track page visibility changes (tab switching)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.track('page_hidden', {
          sessionDuration: this.getSessionDuration(),
        });
      } else {
        this.track('page_visible');
      }
    });

    // Track page exit (when user leaves)
    window.addEventListener('beforeunload', () => {
      this.track('page_exit', {
        sessionDuration: this.getSessionDuration(),
        finalPage: window.location.pathname,
      });
    });

    // Track scroll depth
    this.trackScrollDepth();

    // Track inactivity
    this.trackInactivity();
  }

  /**
   * Track scroll depth milestones (25%, 50%, 75%, 100%)
   */
  private trackScrollDepth(): void {
    const milestones = [25, 50, 75, 100];
    const reached = new Set<number>();

    const checkScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollHeight > 0
        ? (window.scrollY / scrollHeight) * 100
        : 100;

      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          this.track('scroll_depth', {
            percentage: milestone,
            scrollY: window.scrollY,
          });
        }
      });
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
  }

  /**
   * Track user inactivity after 30 seconds of no interaction
   */
  private trackInactivity(): void {
    let inactivityTimer: NodeJS.Timeout;
    const inactivityThreshold = 30000; // 30 seconds
    let isInactive = false;

    const resetTimer = () => {
      // If was inactive, track that user is now active again
      if (isInactive) {
        isInactive = false;
        this.track('user_active');
      }

      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        isInactive = true;
        this.track('user_inactive', {
          inactiveDuration: inactivityThreshold / 1000,
        });
      }, inactivityThreshold);
    };

    // Track various interaction events
    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'].forEach(event => {
      document.addEventListener(event, resetTimer, { passive: true });
    });

    resetTimer();
  }

  /**
   * Track button clicks
   */
  trackButtonClick(buttonId: string, buttonText?: string, additionalData?: Record<string, any>): void {
    this.track('button_click', {
      buttonId,
      buttonText,
      ...additionalData,
    });
  }

  /**
   * Track form submissions
   */
  trackFormSubmit(formId: string, formType?: string, additionalData?: Record<string, any>): void {
    this.track('form_submit', {
      formId,
      formType,
      ...additionalData,
    });
  }

  /**
   * Track video interactions
   */
  trackVideo(
    action: 'play' | 'pause' | 'ended' | 'progress',
    videoId: string,
    currentTime?: number,
    duration?: number
  ): void {
    this.track(`video_${action}`, {
      videoId,
      currentTime: currentTime ? Math.floor(currentTime) : undefined,
      duration: duration ? Math.floor(duration) : undefined,
      watchPercentage: duration && currentTime
        ? Math.floor((currentTime / duration) * 100)
        : 0,
    });
  }

  /**
   * Track link clicks
   */
  trackLinkClick(href: string, linkText?: string, isExternal?: boolean): void {
    this.track('link_click', {
      href,
      linkText,
      isExternal,
    });
  }

  /**
   * Track custom events
   */
  trackCustom(eventName: string, data?: Record<string, any>): void {
    this.track(eventName, data);
  }
}

// Export singleton instance
export const analytics = new AnalyticsService();
