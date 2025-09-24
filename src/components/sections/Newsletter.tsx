import React from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Newsletter: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="newsletter" className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Subscribe to the Clause Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Stay updated with the latest features, legal insights, and product updates.
            </p>
            <div className="bg-white rounded-xl px-4 py-1 shadow-sm">
              <iframe
                src="https://link.augmentedailabs.com/widget/form/KtQ50mlmw9NpQgyUksHh"
                style={{width:'100%',height:'432px',border:'none',borderRadius:'8px'}}
                id="inline-KtQ50mlmw9NpQgyUksHh" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Clause.to Newsletter"
                data-height="432"
                data-layout-iframe-id="inline-KtQ50mlmw9NpQgyUksHh"
                data-form-id="KtQ50mlmw9NpQgyUksHh"
                title="Clause.to Newsletter"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;