import React from 'react';
import { Sparkles, Library, AlertTriangle, Workflow, Settings, Shield } from 'lucide-react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imagePlaceholder: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  imagePlaceholder,
  imageAlt,
  imagePosition
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className={`grid gap-8 md:grid-cols-2 md:gap-16 items-center ${
        imagePosition === 'right' ? '' : 'md:grid-flow-dense'
      }`}
    >
      <div className={imagePosition === 'right' ? '' : 'md:col-start-2'}>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className={imagePosition === 'right' ? '' : 'md:col-start-1 md:row-start-1'}>
        <div className="relative aspect-video rounded-xl bg-gray-100 shadow-xl overflow-hidden border border-gray-200">
          <img
            src={`/images/${imagePlaceholder}`}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const AssistantFeatures: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: FeatureProps[] = [
    {
      icon: <Sparkles size={24} />,
      title: "Draft with Natural Language",
      description: "Just describe what you need in plain English. The Assistant generates precise contract language instantly—whether you're drafting a termination clause, liability provision, or entire section from scratch.",
      imagePlaceholder: "assistant-natural-language.png",
      imageAlt: "Natural language drafting interface showing AI-generated contract clauses",
      imagePosition: 'right'
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Identify Risks Automatically",
      description: "Don't let problematic language slip through. The Assistant analyzes your agreement and flags potential risks, unclear terms, and concerning provisions before they become issues.",
      imagePlaceholder: "assistant-risk-analysis.png",
      imageAlt: "Risk analysis feature highlighting problematic clauses in a contract",
      imagePosition: 'left'
    },
    {
      icon: <Library size={24} />,
      title: "Ground AI in Your Real Contracts",
      description: "Connect Collections from Clause Explorer to give the Assistant access to your battle-tested clauses. Draft new agreements using language you've already negotiated and approved—not generic templates.",
      imagePlaceholder: "assistant-collections.png",
      imageAlt: "Collections integration showing curated clause library",
      imagePosition: 'right'
    },
    {
      icon: <Workflow size={24} />,
      title: "Save Your Favorite Prompts",
      description: "Reuse complex instructions with one click. Save your frequently-used prompts for liability reviews, term modifications, or custom analyses—no more retyping the same instructions.",
      imagePlaceholder: "assistant-saved-prompts.png",
      imageAlt: "Saved prompts interface showing reusable instruction templates",
      imagePosition: 'left'
    },
    {
      icon: <Settings size={24} />,
      title: "Choose Your AI Model",
      description: "Switch between Anthropic Claude, Google Gemini, or OpenAI GPT models based on your needs. Different models excel at different tasks—you decide which works best for each project.",
      imagePlaceholder: "assistant-model-selection.png",
      imageAlt: "AI model selection interface with multiple provider options",
      imagePosition: 'right'
    }
  ];

  return (
    <section id="features" className="scroll-mt-20 bg-white py-24">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Legal Drafting
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Everything you need to draft contracts faster, smarter, and with complete control.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AssistantFeatures;
