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
      question: "What versions of Microsoft Word does Redline support?",
      answer: "Redline supports Microsoft Word 2016, 2019, Microsoft 365, and later versions on both Windows and macOS platforms."
    },
    {
      question: "Can I customize the redlining rules to match my company's policies?",
      answer: "Yes, Redline allows you to create, import, and customize redlining rules to match your specific company policies and style guides."
    },
    {
      question: "Is my document data secure when using Redline?",
      answer: "Absolutely. Redline processes all documents locally on your machine. Your document content never leaves your computer or gets uploaded to any server, ensuring complete privacy and security."
    },
    {
      question: "How does the licensing work for teams?",
      answer: "The team license provides access for up to 5 users with shared policy libraries. Each user will receive their own license key for activation. For larger teams, you can purchase multiple team licenses or contact us for enterprise pricing."
    },
    {
      question: "Can I transfer my license to another computer?",
      answer: "Yes, you can deactivate Redline on one computer and activate it on another. Individual licenses can be used on up to 2 devices simultaneously for the same user."
    },
    {
      question: "Do you offer a trial version?",
      answer: "Yes, we offer a 14-day free trial with full functionality. No credit card is required to start your trial."
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
            Find answers to common questions about Redline.
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