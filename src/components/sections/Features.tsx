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
      title: "Structured Analysis",
      description: "Clause employs a unique structured analysis approach that brings all of your documents to life, delivering fast, accurate answers to complex questions",
      icon: <Monitor size={20} className="stroke-primary-600" />
    },
    {
      title: "Web & Word",
      description: "Clause works on the Web and seamlessly inside of Microsoft Word with no need to switch between applications to access the full power of the most advanced AI models.",
      icon: <Shield size={20} className="stroke-primary-600" />
    },
    {
      title: "Collaboration",
      description: "Policies, Prompts, and Curated Content can be shared within your organization and with clients or business partners to drive fast turn around with better quality and compliance.",
      icon: <Wifi size={20} off={true} className="stroke-primary-600" />
    },
    {
      title: "Private & Secure",
      description: "Your data is for you. We store and use data only to the extent necessary to support your needs and do not use it for any other purpose.",
      icon: <Lock size={20} className="stroke-primary-600" />
    },
    {
      title: "Seamless Word Experience",
      description: "Clause focuses on selected paragraphs, provides active citations in responses, and directly applies tracked changes to your document",
      icon: <Layers size={20} className="stroke-primary-600" />
    },
    {
      title: "GPT Where you Work",
      description: "Access the full power of the world's most advanced AI where you work, inside of Word and integrated with your document library",
      icon: <Users size={20} className="stroke-primary-600" />
    }
  ];

  return (
    <section id="features" className="scroll-mt-20 bg-white py-24">
      <Container>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get done in minutes what used to take hours
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Clause combines powerful AI with ease of use to accelerate your contract and agreement workflows.
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