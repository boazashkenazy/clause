import { useEffect, useRef } from 'react';
import { analytics } from '../utils/analytics';

/**
 * Hook to track video engagement (play, pause, progress, ended)
 * Returns a ref to attach to your video element
 *
 * @param videoId - Unique identifier for the video
 * @returns videoRef - Attach this to your <video> element
 *
 * @example
 * const videoRef = useVideoTracking('homepage-hero-video');
 * return <video ref={videoRef} controls>...</video>
 */
export const useVideoTracking = (videoId: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressMilestones = useRef(new Set<number>());

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Track play event
    const handlePlay = () => {
      analytics.trackVideo('play', videoId, video.currentTime, video.duration);
    };

    // Track pause event
    const handlePause = () => {
      analytics.trackVideo('pause', videoId, video.currentTime, video.duration);
    };

    // Track video ended
    const handleEnded = () => {
      analytics.trackVideo('ended', videoId, video.currentTime, video.duration);
    };

    // Track progress milestones (25%, 50%, 75%)
    const handleTimeUpdate = () => {
      if (!video.duration) return;

      const percentage = (video.currentTime / video.duration) * 100;
      const milestones = [25, 50, 75];

      milestones.forEach(milestone => {
        if (percentage >= milestone && !progressMilestones.current.has(milestone)) {
          progressMilestones.current.add(milestone);
          analytics.trackVideo('progress', videoId, video.currentTime, video.duration);
        }
      });
    };

    // Attach event listeners
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Cleanup
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [videoId]);

  return videoRef;
};
