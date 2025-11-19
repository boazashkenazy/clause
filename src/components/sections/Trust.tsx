import React from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Trust: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonial = {
    quote: "I have used a variety of AI-powered tools in my practice and Clause has been a tremendous addition, enabling me to both improve the quality of my work and accomplish more in the same amount of time.",
    author: "Scott Giordano",
    role: "Senior Attorney",
    company: "The CISO Law Firm"
  };

  return (
    <section className="bg-white py-24">
      <Container>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Trusted by Forward-Thinking Legal Teams
          </h2>
          
          <div className="mt-16">
            <blockquote className="relative">
              <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600 italic">
                "{testimonial.quote}"
              </p>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-16 w-16 rounded-full object-cover"
                      src="/images/profile-scott-giordano.png"
                      alt="Scott Giordano"
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-base font-medium text-gray-500">
                      <span className="mx-1">•</span>
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Trust;