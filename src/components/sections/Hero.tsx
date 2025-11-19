import React, { useState, useRef } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { Play, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
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

  const testimonials = [
    {
      quote: "I've been using Clause for about seven months. What I really like about it is the simplicity and ease of use. There's very little management or input that I need to produce. I can simply tell Clause what to do and it does it.",
      author: "Kyle Dostal",
      role: "Attorney",
      company: "Koley Jessen",
      image: "/images/profile-kyle-dostal.png",
      companyLogo: "/images/company-logo-kj.png"
    },
    {
      quote: "I have used a variety of AI-powered tools in my practice and Clause has been a tremendous addition, enabling me to both improve the quality of my work and accomplish more in the same amount of time.",
      author: "Scott Giordano",
      role: "Senior Attorney",
      company: "The CISO Law Firm",
      image: "/images/profile-scott-giordano.png",
      companyLogo: "/images/company-logo-ciso.png"
    },
    {
      quote: "Clause is my go-to AI drafting solution. Clause consistently delivers high quality drafting suggestions natively in Word. I have tried multiple different tools and this is the first to integrate frictionlessly into my workflow—a true force multiplier for any boutique firm.",
      author: "Lachlan Huck",
      role: "Attorney",
      company: "Focal PLLC",
      image: "/images/profile-lachlan-huck.png",
      companyLogo: "/images/company-logo-focal.png"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-16">
      {/* Main Hero Section - Split Layout */}
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-12 lg:py-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl leading-tight">
              Legal Intelligence for Business
            </h1>

            <p className="mt-6 text-xl leading-8 text-gray-700">
              The full power of AI for research, drafting, review and revision—right where you work.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-600" />
                <span>500 free credits</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Video Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 shadow-lg border border-gray-200">
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
                    alt="Clause AI demo video showing policy review and document analysis in Microsoft Word"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                    <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full group-hover:scale-110 transition-all shadow-lg">
                      <Play className="w-6 h-6 text-primary-600 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Testimonials Section */}
      <div className="bg-gray-50 border-y border-gray-200 py-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-center text-sm font-medium text-gray-600 mb-8">
              Trusted by Legal Teams
            </p>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 h-full flex flex-col"
                >
                  {/* Company Logo */}
                  <div className="mb-6 h-10 flex items-center justify-center">
                    <img
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      className="h-8 w-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                    />
                  </div>

                  {/* Quote */}
                  <p className="text-base text-gray-700 leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
