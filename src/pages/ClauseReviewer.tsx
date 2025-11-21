import React, { useState, useRef } from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ReviewerFeatures from '../components/sections/ReviewerFeatures';
import Newsletter from '../components/sections/Newsletter';
import Contact from '../components/sections/Contact';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const ClauseReviewer: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!showVideo) {
      setShowVideo(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
          setIsVideoPlaying(true);
        }
      }, 100);
    } else {
      if (videoRef.current) {
        if (isVideoPlaying) {
          videoRef.current.pause();
          setIsVideoPlaying(false);
        } else {
          videoRef.current.play();
          setIsVideoPlaying(true);
        }
      }
    }
  };

  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white pt-16">
        <Container>
          <div className="pb-20 pt-16 lg:pt-24">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div className="lg:col-span-2">
                <motion.p
                  className="text-base font-medium text-primary-600 uppercase tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Reviewer
                </motion.p>
                <motion.h1
                  className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Redline at the Speed of Thought
                </motion.h1>
                <motion.p
                  className="mt-6 text-xl text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Turn hours of manual contract review into seconds. Upload your playbooks and get instant, policy-driven redlines with full transparency into every change.
                </motion.p>
                <motion.div
                  className="mt-10 flex flex-col sm:flex-row items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.location.href = '/gettingstarted'}
                  >
                    Try Clause Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = '/pricing'}
                  >
                    View Pricing
                  </Button>
                </motion.div>
                <motion.div
                  className="mt-6 flex items-start gap-6 text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>500 free credits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No credit card required</span>
                  </div>
                </motion.div>
              </div>

              {/* Right: Video */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 shadow-2xl border border-gray-200">
                  {showVideo ? (
                    <video
                      ref={videoRef}
                      className="h-full w-full object-cover"
                      controls
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                      onEnded={() => {
                        setIsVideoPlaying(false);
                        setShowVideo(false);
                      }}
                    >
                      <source src="/images/playbook_review_video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="relative cursor-pointer group h-full w-full" onClick={toggleVideo}>
                      <img
                        src="/images/playbook_review_thumbnail.png"
                        alt="Playbook Review demo preview"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="flex items-center justify-center w-20 h-20 bg-white/90 rounded-full group-hover:bg-white group-hover:scale-110 transition-all mb-4">
                          <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                        </div>
                        <p className="text-white text-lg font-semibold drop-shadow-lg">Watch Demo Video</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <ReviewerFeatures />

      {/* Contact Section */}
      <Contact />

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

export default ClauseReviewer;