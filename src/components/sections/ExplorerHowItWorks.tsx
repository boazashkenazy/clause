import React from 'react';
import { Search, Save, RotateCcw } from 'lucide-react';
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

const ExplorerHowItWorks: React.FC = () => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Search with Precision",
      description: "Find specific provisions across complex contracts using natural language queries.",
      icon: <Search size={24} className="stroke-primary-600" />
    },
    {
      number: 2,
      title: "Save Your Best Work",
      description: "Build a personal library of effective clauses that have been negotiated and approved.",
      icon: <Save size={24} className="stroke-primary-600" />
    },
    {
      number: 3,
      title: "Reuse with Confidence",
      description: "Pull proven language into new agreements, ensuring consistency and saving negotiation time.",
      icon: <RotateCcw size={24} className="stroke-primary-600" />
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
            Search, Save, Succeed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Transform your contract archive into a strategic advantage with intelligent search and clause management.
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

export default ExplorerHowItWorks;