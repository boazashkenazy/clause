import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import IntegratedServicesVideoDemo from '../components/sections/IntegratedServicesVideoDemo';
import IntegratedServicesHowItWorks from '../components/sections/IntegratedServicesHowItWorks';
import Newsletter from '../components/sections/Newsletter';
import Contact from '../components/sections/Contact';
import { motion } from 'framer-motion';

const IntegratedServices: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white pt-16">
        <Container>
          <div className="mx-auto max-w-7xl pb-16 pt-16 text-center lg:pt-20">
            <motion.p 
              className="text-base font-medium text-primary-600 uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Integrated Services
            </motion.p>
            <motion.h1 
              className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your Systems, Connected
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Custom integrations that connect Clause to your document repositories, CLMs, and workflows—so your team works seamlessly across all platforms.
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
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Video Section */}
      <IntegratedServicesVideoDemo />

      {/* Benefits Section */}
      <IntegratedServicesHowItWorks />

      {/* Contact Section */}
      <Contact />

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

export default IntegratedServices;