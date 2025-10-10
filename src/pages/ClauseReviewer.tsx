import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ReviewerVideoDemo from '../components/sections/ReviewerVideoDemo';
import ReviewerHowItWorks from '../components/sections/ReviewerHowItWorks';
import Newsletter from '../components/sections/Newsletter';
import Contact from '../components/sections/Contact';
import { motion } from 'framer-motion';

const ClauseReviewer: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white pt-16">
        <Container>
          <div className="mx-auto max-w-7xl pb-2 pt-16 text-center lg:pt-20">
            <motion.p 
              className="text-base font-medium text-primary-600 uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Reviewer
            </motion.p>
            <motion.h1 
              className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Redline at the Speed of Thought
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Automatically apply playbooks and policies to any contract for instant, consistent redlines that match your company's standards.
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
                onClick={() => window.location.href = '/gettingstarted'}
              >
                Try Clause Now
              </Button>
              <div className="mt-8">
                <img 
                  src="/images/clause-word.png"
                  alt="Clause AI integration with Microsoft Word for legal document review" 
                  className="h-[10rem]"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Video Section */}
      <ReviewerVideoDemo />

      {/* Benefits Section */}
      <ReviewerHowItWorks />

      {/* Contact Section */}
      <Contact />

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

export default ClauseReviewer;