import React, { useState, useRef } from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

const AssistantVideoDemo: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="video-demo" className="scroll-mt-20 bg-white py-12">
      <Container>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See Clause Assistant in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Watch how Clause transforms document reviewing in just seconds.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            {showVideo ? (
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                poster="/images/clause-screencapture.jpg"
                controls
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => {
                  setIsVideoPlaying(false);
                  setShowVideo(false);
                }}
              >
                <source src="/images/clause-demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative cursor-pointer group h-full w-full" onClick={toggleVideo}>
                <img 
                  src="/images/clause-screencapture.jpg"
                  alt="Interactive demo of Clause AI analyzing legal documents with policy review in Microsoft Word" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="flex items-center justify-center w-20 h-20 bg-white/90 rounded-full group-hover:bg-white group-hover:scale-110 transition-all">
                    <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AssistantVideoDemo;