import React from 'react';
import { FileCheck, Zap, Eye, Users, GitBranch, Settings } from 'lucide-react';
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

const ReviewerFeatures: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: FeatureProps[] = [
    {
      icon: <FileCheck size={24} />,
      title: "Upload Your Playbooks",
      description: "Upload your company's policies, standards, and negotiation guidelines. Define preferred language, required clauses, fallback positions, and red lines. Your playbook becomes the AI's instruction manual for every review.",
      imagePlaceholder: "reviewer-playbook-upload.png",
      imageAlt: "Playbook upload interface showing policy document management",
      imagePosition: 'right'
    },
    {
      icon: <Zap size={24} />,
      title: "One-Click Instant Redlines",
      description: "Review contracts in seconds, not hours. Whether it's a 5-page NDA or a 100-page master agreement, Playbook Review applies automatic redlines to align every provision with your standards. What used to take hours now happens instantly.",
      imagePlaceholder: "reviewer-instant-redlines.png",
      imageAlt: "Automated redlining showing tracked changes in a contract",
      imagePosition: 'left'
    },
    {
      icon: <Eye size={24} />,
      title: "Full Transparency into Every Change",
      description: "See exactly what was modified and why. The Revisions section shows each change with explicit references to your specific policies. No black box—just clear explanations tied directly to your playbook standards.",
      imagePlaceholder: "reviewer-revisions-panel.png",
      imageAlt: "Revisions panel showing detailed change explanations with policy references",
      imagePosition: 'right'
    },
    {
      icon: <GitBranch size={24} />,
      title: "Track Policy Application",
      description: "The Policy Notes section shows which policies in your playbook triggered revisions and which didn't apply. Get a complete picture of how your standards were applied to this specific contract.",
      imagePlaceholder: "reviewer-policy-notes.png",
      imageAlt: "Policy notes interface displaying applied and non-applied policies",
      imagePosition: 'left'
    },
    {
      icon: <Users size={24} />,
      title: "Share Playbooks with Your Team",
      description: "Create consistency across your entire organization. Share playbooks with colleagues so everyone reviews contracts using the same standards. No more inconsistent positions or conflicting guidance between team members.",
      imagePlaceholder: "reviewer-team-sharing.png",
      imageAlt: "Team collaboration interface for shared playbook access",
      imagePosition: 'right'
    },
    {
      icon: <Settings size={24} />,
      title: "Control Every Review",
      description: "Set which party you represent and choose your preferred AI model—Anthropic Claude, Google Gemini, or OpenAI GPT. Configure each review to match your specific needs and preferences.",
      imagePlaceholder: "reviewer-settings.png",
      imageAlt: "Review settings showing party selection and AI model options",
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
            Contract Review That Scales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Transform hours of manual review into seconds with automated, policy-driven redlines.
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

export default ReviewerFeatures;
