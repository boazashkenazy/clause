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
    quote: "Redline has transformed our document review process. What used to take hours now takes minutes, and the accuracy is remarkable.",
    author: "Sarah Chen",
    role: "General Counsel",
    company: "TechCorp Legal"
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
                      className="mx-auto h-16 w-16 rounded-full"
                      src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
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