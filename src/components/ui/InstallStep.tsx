import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface InstallStepProps {
  step: number;
  title: string;
  description: string;
  screenshot?: string;
  index: number;
}

const InstallStep: React.FC<InstallStepProps> = ({
  step,
  title,
  description,
  screenshot,
  index
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-12 flex flex-col md:flex-row items-start gap-8"
    >
      {/* Step Number */}
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white text-xl font-bold">
          {step}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Screenshot */}
        {screenshot && (
          <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <img 
              src={screenshot}
              alt={`Step ${step} screenshot`}
              className="w-full h-auto"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InstallStep;