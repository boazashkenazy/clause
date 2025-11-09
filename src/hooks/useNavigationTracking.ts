import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../utils/analytics';

/**
 * Hook to track page navigation with React Router
 * Tracks when users navigate from one page to another
 */
export const useNavigationTracking = () => {
  const location = useLocation();
  const previousLocation = useRef<string>(location.pathname);

  useEffect(() => {
    const currentPath = location.pathname;
    const previousPath = previousLocation.current;

    // Only track if the page actually changed
    if (currentPath !== previousPath) {
      analytics.trackPageNavigation(currentPath, previousPath);
      previousLocation.current = currentPath;
    }
  }, [location]);
};
