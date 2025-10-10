import React from 'react';
import { MessageSquare, Edit, FileText } from 'lucide-react';
import Container from '../ui/Container';
import { StepProps } from '../../types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: number * 0.2 }}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const AssistantHowItWorks: React.FC = () => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Ask and Draft",
      description: "Describe what you need in plain language and get suggestions or revisions instantly.",
      icon: <MessageSquare size={24} className="stroke-primary-600" />
    },
    {
      number: 2,
      title: "Refine on the Fly",
      description: "Ask questions about specific provisions and receive cited explanations to guide revisions.",
      icon: <Edit size={24} className="stroke-primary-600" />
    },
    {
      number: 3,
      title: "Build Quality Documents",
      description: "Leverage curated content from Clause Explorer and other sources to produce high quality documents quickly.",
      icon: <FileText size={24} className="stroke-primary-600" />
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="scroll-mt-20 bg-gray-50 py-24">
      <Container>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your AI Drafting Assistant
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            From first draft to final details, Assistant helps you create precise contract language faster.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AssistantHowItWorks;