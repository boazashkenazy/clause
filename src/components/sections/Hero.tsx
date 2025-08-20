import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import VideoModal from '../ui/VideoModal';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white pt-16">
      <Container>
        <div className="mx-auto max-w-7xl pb-16 pt-16 text-center lg:pt-20">
          <motion.h1 
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Legal Intelligence for Business
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Draft, review and revise with the full power of AI seamlessly integrated into Microsoft Word.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => window.location.href = '/pricing'}
            >
              Try Clause Now
            </Button>
          </motion.div>
        </div>
      </Container>
      
      <div className="relative mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See Clause in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Watch how Clause transforms document reviewing in just seconds.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Clause Word image */}
          <div className="mb-4">
            <img 
              src="/images/clause-word.png"
              alt="Document to Microsoft Word integration" 
              className="h-[10rem]"
            />
          </div>
          
          {/* Video thumbnail */}
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 shadow-lg w-full max-w-4xl cursor-pointer group"
               onClick={() => setIsVideoOpen(true)}>
            <img 
              src="https://img.youtube.com/vi/QYO7jwvk5X0/maxresdefault.jpg"
              alt="Clause Demo Video" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="flex items-center justify-center w-20 h-20 bg-white/90 rounded-full group-hover:bg-white group-hover:scale-110 transition-all">
                <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <VideoModal 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="https://www.youtube.com/embed/QYO7jwvk5X0"
      />
    </section>
  );
};

export default Hero;