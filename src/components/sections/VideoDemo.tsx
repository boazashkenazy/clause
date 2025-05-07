import React from 'react';
import { Play } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface VideoDemoProps {
  onDemoClick: () => void;
}

const VideoDemo: React.FC<VideoDemoProps> = ({ onDemoClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="video-demo" className="scroll-mt-20 bg-white py-24">
      <Container>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See Redline in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Watch how Redline transforms document reviewing in just seconds.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Video thumbnail" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <Button 
                variant="primary"
                size="lg"
                onClick={onDemoClick}
                className="group rounded-full p-5"
              >
                <Play size={40} className="ml-1 transition-transform group-hover:scale-110" />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default VideoDemo;