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
      question: "Is my document data secure when using Clause?",
      answer: "Yes, your data remains completely private and secure. We don't store any of your document content, chat histories, or processing results. Your data is only processed temporarily to provide our service, then immediately discarded."
    },
    {
      question: "Do you collect or store my Word documents?",
      answer: "No, we do not collect, store, or retain the contents of your Word documents. Documents are processed temporarily to provide analysis and suggestions, then immediately discarded from our systems."
    },
    {
      question: "What happens to my chat dialog histories and prompts?",
      answer: "We do not store chat dialog histories, prompts, or responses. These interactions are processed in real-time to provide our service, but are not retained in our systems or used for any other purpose."
    },
    {
      question: "Do you use my data to train AI models?",
      answer: "No, we never use your data for training AI models, marketing purposes, or commercial third-party sharing. Your content remains private and is only processed as minimally necessary to deliver our service."
    },
    {
      question: "What AI services do you use and how do they handle my data?",
      answer: "We use OpenAI services to power our features. These providers do not use your data for training their models and may retain data temporarily (up to 30 days) for service delivery purposes, after which it's permanently deleted."
    },
    {
      question: "Can I use Clause on my work device?",
      answer: "Yes. Installing the Clause for Word may require approval from your IT department."
    },
    {
      question: "Where is my data processed?",
      answer: "Your data is processed through OpenAI's secure infrastructure with enterprise-grade security measures. Data processing occurs only during active use of the service."
    },
    {
      question: "What versions of Microsoft Word does Clause support?",
      answer: "Clause supports Microsoft Word 2019 Desktop and later versions on both Windows and macOS platforms, and Microsoft Word for Web (Office 365)."
    },
    {
      question: "What is a credit?",
      answer: "Credits are used to power Clause's AI features. Usage varies by task and document size. For example:\n\nDrafting a 1,000 word document consumes less than 2 credits\nRunning Policy Review with 10 policies against a 2,000 word document (e.g., a basic NDA) uses approximately 3 credits\n\nYour monthly credit allowance resets each billing cycle, so you can use Clause consistently throughout the month."
    },
    {
      question: "Can I transfer my license to another computer?",
      answer: "The license is for the user and is associated with your email address. You can sign in using Google or Microsoft authentication from any device."
    },
    {
      question: "Do you offer a trial version?",
      answer: "Yes, we offer 30 day free trial with no credit card required."
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