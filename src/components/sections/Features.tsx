import React from 'react';
import { Monitor, Shield, Wifi, Lock, Layers, Users } from 'lucide-react';
import Container from '../ui/Container';
import { FeatureProps } from '../../types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Feature: React.FC<FeatureProps & { index: number }> = ({ title, description, icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex"
    >
      <div className="mr-4 mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary-100 text-primary-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: FeatureProps[] = [
    {
      title: "Word-Native Experience",
      description: "Works seamlessly inside Microsoft Word with no need to switch between applications.",
      icon: <Monitor size={20} className="stroke-primary-600" />
    },
    {
      title: "Context Aware",
      description: "Clause knows exactly which section of the document is selected and responds accordingly",
      icon: <Shield size={20} className="stroke-primary-600" />
    },
    {
      title: "Instant Revisions",
      description: "Clause makes automatic change-tracked revisions and add comments as directed by the user, or driven by policy review.",
      icon: <Wifi size={20} off={true} className="stroke-primary-600" />
    },
    {
      title: "Private & Secure",
      description: "Your documents are not stored by Clause, ensuring privacy and security.",
      icon: <Lock size={20} className="stroke-primary-600" />
    },
    {
      title: "Policy Management and Sharing",
      description: "Easily create, manage, and share policies for high performance policy review workflows",
      icon: <Layers size={20} className="stroke-primary-600" />
    },
    {
      title: "Powerful Drafting Assistant",
      description: "Ask questions, draft new language, or generate AI driven revisions in Word integrated chat.",
      icon: <Users size={20} className="stroke-primary-600" />
    }
  ];

  return (
    <section id="features" className="scroll-mt-20 bg-gray-50 py-24">
      <Container>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get done in minutes what used to take hours directly inside Microsoft Word
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Clause combines powerful AI with ease of use to accelerate your contracts and agreements workflow.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature key={index} index={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;