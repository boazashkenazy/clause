import React, { useState, useRef } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

const VideoTestimonial: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Video Side - Takes up 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900 shadow-2xl border border-gray-200">
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
                    <source src="/images/Kyle_Video_Testimonial.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative cursor-pointer group h-full w-full" onClick={toggleVideo}>
                    {/* Video poster - first frame of video */}
                    <video
                      className="h-full w-full object-cover"
                      preload="metadata"
                    >
                      <source src="/images/Kyle_Video_Testimonial.mp4#t=0.1" type="video/mp4" />
                    </video>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full group-hover:scale-110 transition-all shadow-2xl">
                        <Play className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Content Side - Takes up 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 flex flex-col justify-center"
            >
              {/* Heading */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Simplicity That Works
              </h2>

              {/* Subheading */}
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Hear from Kyle Dostal on how Clause transformed his legal workflow.
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-10">
                <img
                  src="/images/profile-kyle-dostal.png"
                  alt="Kyle Dostal"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    Kyle Dostal
                  </div>
                  <div className="text-gray-600">
                    Attorney, Koley Jessen
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
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
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
};

export default VideoTestimonial;
