import React from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: React.ReactNode;
  bullets: string[];
  image: string;
  imageAlt: string;
  link: string;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, bullets, image, imageAlt, link, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Image */}
      <div className={`${!isEven ? 'lg:order-2' : ''}`}>
        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200 bg-white">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? 'lg:order-1' : ''}`}>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-base text-gray-700 leading-relaxed mb-6">{description}</p>

        <ul className="space-y-3 mb-6">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>

        <a
          href={link}
          className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Learn more <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const features = [
    {
      title: "Drafting Assistant",
      description: <><strong>Clause Assistant</strong> brings the full power of the most advanced AI models into your Word environment for analysis, drafting or revising, including access to curated content</>,
      bullets: [
        "AI-powered drafting and revision directly in Microsoft Word",
        "Access to advanced GPT models with legal context",
        "Seamless integration with Track Changes",
        "Use curated content and clause libraries in your drafts"
      ],
      image: "/images/drafting-assistant.png",
      imageAlt: "Clause Assistant - AI-powered legal drafting in Microsoft Word",
      link: "/assistant"
    },
    {
      title: "Playbook Review",
      description: <><strong>Clause Playbook Review</strong> automatically redlines documents inside of Microsoft Word, or in bulk to comply with your internal policies</>,
      bullets: [
        "Automated redlining against your company policies",
        "Review documents individually or in bulk",
        "Shared policy libraries across your team",
        "Detailed explanations for every suggested change"
      ],
      image: "/images/playbook-review.png",
      imageAlt: "Clause Reviewer - Automated policy compliance review",
      link: "/reviewer"
    },
    {
      title: "Document Research",
      description: <><strong>Clause Explorer</strong> helps you get cited, supported answers to questions that may span many documents, and manage content for drafting and collaboration</>,
      bullets: [
        "Search across unlimited documents simultaneously",
        "Get cited answers with source references to support your work",
        "Build reusable clause libraries for your team",
        "Manage and curate content for drafting and collaboration"
      ],
      image: "/images/explorer.png",
      imageAlt: "Clause Explorer - Research across legal documents",
      link: "/explorer"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white py-20">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            How Clause Works
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">
            The Clause Platform is a web application for working with large collections of legal documents and a Microsoft Word AddIn that you can use alongside any open document
          </p>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;