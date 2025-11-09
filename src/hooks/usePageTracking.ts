import { useEffect } from 'react';
import { analytics } from '../utils/analytics';

/**
 * Hook to automatically track page views, exits, scroll depth, and user activity
 * Use this once at the App level to initialize global tracking
 */
export const usePageTracking = () => {
  useEffect(() => {
    // Initialize automatic page tracking
    analytics.initPageTracking();
  }, []);
};
