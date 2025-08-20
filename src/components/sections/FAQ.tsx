import React from 'react';
import Container from '../ui/Container';
import FAQAccordion from '../ui/FAQAccordion';
import { FAQItemProps } from '../../types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQ: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqItems: FAQItemProps[] = [
    {
      question: "What versions of Microsoft Word does Clause support?",
      answer: "Clause supports Microsoft Word 2019 Desktop and later versions on both Windows and macOS platforms."
    },
    {
      question: "What is a credit?",
      answer: "A credit is equivalent to 1000 AI output tokens or 4000 AI input tokens. For legal prose in English, one word is typically 1.4 AI tokens."
    },
    {
      question: "Is my document data secure when using Clause?",
      answer: "Clause does not store your Word documents on our servers. We rely on AI foundation models that store processing request data for a maximum of 30 days for legal compliance purposes only, not for model training. Contact us if you require additional information or if you have special data security requirements."
    },
    {
      question: "Can I transfer my license to another computer?",
      answer: "Yes, your license is associated with your email address. You can use Clause anywhere that you are signed in with that address."
    },
    {
      question: "Do you offer a trial version?",
      answer: "Yes, we offer a 30-day free trial with full functionality. No credit card is required to start your trial."
    }
  ];

  return (
    <section id="faq" className="bg-white py-24">
      <Container>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Find answers to common questions about Clause.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <FAQAccordion items={faqItems} />
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQ;