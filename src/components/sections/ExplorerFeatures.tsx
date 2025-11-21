import React from 'react';
import { Search, Filter, Quote, BookmarkPlus, Layers, Share2 } from 'lucide-react';
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

const ExplorerFeatures: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: FeatureProps[] = [
    {
      icon: <Search size={24} />,
      title: "Search Across Your Entire Library",
      description: "Upload all your agreements—MSAs, NDAs, leases, statements of work. Explorer structures them intelligently, preserving document hierarchy so the AI always has full context. Ask questions that span hundreds of contracts and get instant answers.",
      imagePlaceholder: "explorer-search-interface.png",
      imageAlt: "Search interface showing query input across document library",
      imagePosition: 'right'
    },
    {
      icon: <Filter size={24} />,
      title: "Filter and Focus Your Search",
      description: "Narrow down exactly what you need. Filter by text, document type, or counterparty. Use checkboxes to select specific documents for targeted searches. Only search what's relevant—not your entire library every time.",
      imagePlaceholder: "explorer-filtering.png",
      imageAlt: "Document filtering interface with type and counterparty options",
      imagePosition: 'left'
    },
    {
      icon: <Quote size={24} />,
      title: "Get Cited Answers with Full Context",
      description: "Every answer includes complete citations to source documents. Click any citation number and jump straight to the exact clause in context. No guessing where information came from—total transparency into every response.",
      imagePlaceholder: "explorer-citations.png",
      imageAlt: "Answer interface showing clickable citations linked to source clauses",
      imagePosition: 'right'
    },
    {
      icon: <BookmarkPlus size={24} />,
      title: "Build Reusable Collections",
      description: "Save your best content to Collections with one click—use 'Save All' to capture every referenced section or save individual clauses as you go. View saved content in Cross-Section mode to see full hierarchical context, not just isolated text. Ask questions directly about your Collections. Share them with your team for consistent drafting. Then pull Collections directly into the Word Add-in to draft using your proven, pre-approved language. Collections transform your contract library into a living knowledge base.",
      imagePlaceholder: "explorer-collections.png",
      imageAlt: "Collections interface showing saving, context view, sharing, and Word integration",
      imagePosition: 'left'
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
            Search, Save, and Build on What Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Transform your contract library into a searchable, reusable knowledge base.
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

export default ExplorerFeatures;
