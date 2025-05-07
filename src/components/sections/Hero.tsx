import React from 'react';
import { Play } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

interface HeroProps {
  onDemoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
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
            Policy-Powered Editing for Microsoft Word
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Automatically redline documents based on your business policies, without leaving Word.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => window.location.href = '#pricing'}
            >
              Try Redline
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onDemoClick}
              className="group"
            >
              <Play size={18} className="mr-2 text-primary-600 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </Container>
      
      <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div 
          className="rounded-xl border border-gray-100 bg-white p-2 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img 
            src="https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Redline in action" 
            className="w-full rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;