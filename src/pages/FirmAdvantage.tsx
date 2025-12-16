import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Users,
  FolderOpen,
  Handshake,
  Settings,
  Check,
  Star,
  Calendar,
  Puzzle,
  Link,
  Globe,
  Target,
  FileStack,
  GraduationCap,
  BookMarked,
  Code,
  ArrowRightLeft
} from 'lucide-react';
import useSEO from '../hooks/useSEO';

interface TierCardProps {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  designedFor: string;
  popular?: boolean;
  index: number;
}

const TierCard: React.FC<TierCardProps> = ({
  name,
  price,
  priceNote,
  description,
  features,
  designedFor,
  popular,
  index
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
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative rounded-2xl border-2 ${popular ? 'border-primary-600 shadow-lg' : 'border-gray-200'} bg-white p-8 hover:shadow-md transition-shadow flex flex-col h-full`}
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-max">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-1.5 text-sm font-semibold text-white">
            <Star size={14} fill="currentColor" />
            Best Value
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {priceNote && <span className="text-gray-500 text-sm">{priceNote}</span>}
        </div>
        <p className="text-sm text-gray-500 mt-1">per year</p>
      </div>

      <ul className="space-y-3 flex-grow mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-gray-100 space-y-4">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">Designed for: </span>
          {designedFor}
        </p>
        <button
          onClick={() => {
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-colors ${
            popular
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

const FirmAdvantage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [includedRef, includedInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [addOnsRef, addOnsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useSEO({
    title: 'Clause Firm Advantage Program | AI Enablement for Law Firms',
    description: 'Complete AI enablement package for law firms. Up to 10 Pro licenses, document library ingestion, dedicated AI success partnership, and custom enhancements.',
    keywords: 'law firm AI, legal AI enablement, Clause for law firms, AI legal drafting, law firm technology',
    canonical: 'https://clause.so/advantage'
  });

  const tiers: TierCardProps[] = [
    {
      name: "Foundation",
      price: "$9,750",
      description: "For small firms starting their AI journey.",
      features: [
        "Up to 10 Clause Plus licenses",
        "Bi-monthly office hours for all users",
        "Bi-monthly practice-area user groups (up to 10/group)",
        "Clause newsletter with tips and best practices",
        "Email support"
      ],
      designedFor: "Boutique firms and early adopters testing AI workflows before scaling.",
      index: 0
    },
    {
      name: "Professional",
      price: "$24,750",
      description: "Everything for firm-wide AI adoption.",
      features: [
        "Up to 10 Clause Pro licenses",
        "Full document library ingestion + monthly curation",
        "Bi-monthly office hours for all users",
        "Bi-monthly practice-area user groups (up to 10/group)",
        "Hands-on workflow design and prompt optimization",
        "Playbook development and validation",
        "Light-touch product enhancements",
        "Priority support with faster SLAs"
      ],
      designedFor: "Firms with multiple practice groups ready to scale with AI",
      popular: true,
      index: 1
    },
    {
      name: "Enterprise",
      price: "$100,000+",
      priceNote: "(customized)",
      description: "Deep integration and bespoke AI operations.",
      features: [
        "Everything in Professional, plus:",
        "Dedicated AI success manager",
        "Unlimited practice-area user groups",
        "Custom integrations (NetDocs, iManage, CLM, billing)",
        "Firm-specific features and custom logic",
        "High-volume template modernization (up to 500 docs)",
        "Model tuning on firm-specific datasets"
      ],
      designedFor: "Mid-size to large firms needing deep workflow automation.",
      index: 2
    }
  ];

  const includedTabs = [
    {
      icon: <Users size={20} />,
      label: "Pro Access",
      title: "Firm-Wide Clause Pro Access",
      description: "Up to 10 Pro licenses across Clause Web/Explorer and Word with a centralized workspace for templates, agreements, and internal standards.",
      highlights: [
        "Up to 10 Pro licenses for your entire firm",
        "Access to Clause Web, Explorer, and Word Add-in",
        "Centralized workspace for templates and agreements",
        "Shared internal standards across all users"
      ]
    },
    {
      icon: <FolderOpen size={20} />,
      label: "Document Library",
      title: "Document Library Ingestion & Curation",
      description: "Initial import, cleanup, and structuring of all firm templates and precedents with ongoing maintenance.",
      highlights: [
        "Initial import and cleanup of firm templates and agreements",
        "Monthly updates as new documents are added",
        "Ongoing dataset quality control for accurate AI outputs",
        "Optional tagging aligned with your practice groups"
      ]
    },
    {
      icon: <Handshake size={20} />,
      label: "AI Partnership",
      title: "AI Success Partnership",
      description: "Hands-on guidance to help your attorneys get reliable, high-quality output from Clause and any third-party AI tools your firm licenses.",
      highlights: [
        "Bi-monthly office hours to troubleshoot real matters",
        "Practice-area user groups (up to 10 users/group)",
        "Prompt and workflow design assistance",
        "Playbook development, testing, and validation",
        "Best practices for quality and reliability",
        "AI enablement support including 3rd-party AI tools"
      ]
    },
    {
      icon: <Settings size={20} />,
      label: "Enhancements",
      title: "Light-Touch Product Enhancements",
      description: "Minor adjustments or feature improvements within Clause to better support your identified workflows.",
      highlights: [
        "Custom improvement for unique drafting patterns",
        "Compliance-specific adjustments",
        "Workflow optimizations for your team",
        "Priority feature requests"
      ]
    }
  ];

  const addOns = [
    { name: "Custom product enhancements", icon: <Puzzle size={18} /> },
    { name: "DMS, CLM, billing integrations", icon: <Link size={18} /> },
    { name: "Multi-jurisdictional modules", icon: <Globe size={18} /> },
    { name: "Custom risk scoring logic", icon: <Target size={18} /> },
    { name: "Large-scale template modernization", icon: <FileStack size={18} /> },
    { name: "Onsite training days", icon: <GraduationCap size={18} /> },
    { name: "Practice-area playbook buildouts", icon: <BookMarked size={18} /> },
    { name: "API access", icon: <Code size={18} /> },
    { name: "Legacy system migration", icon: <ArrowRightLeft size={18} /> }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <Container>
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center pt-20 pb-8"
          >
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-6xl mb-8 whitespace-nowrap">
              Clause Advantage Program<span className="text-4xl lg:text-5xl align-top">™</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              A complete AI enablement package for law firms. Everything your team needs to succeed with AI-powered legal workflows.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-600 mb-12">
              <div className="flex items-center gap-2">
                <Check size={20} className="text-primary-600" />
                <span className="text-lg">Clause Licenses</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} className="text-primary-600" />
                <span className="text-lg">Dedicated Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} className="text-primary-600" />
                <span className="text-lg">Document Library</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact-section');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing-section');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Pricing
              </Button>
            </div>

            {/* Logo Banner - inside hero */}
            <div className="pt-10 pb-6 border-t border-gray-200">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-6">Trusted by forward-thinking firms</p>
              <div className="flex items-center justify-center gap-10 md:gap-16">
                <img
                  src="/images/company-logo-kj.png"
                  alt="Koley Jessen"
                  className="h-8 object-contain grayscale opacity-50"
                />
                <img
                  src="/images/company-logo-ciso.png"
                  alt="The CISO Law Firm"
                  className="h-8 object-contain grayscale opacity-50"
                />
                <img
                  src="/images/company-logo-focal.png"
                  alt="Focal PLLC"
                  className="h-8 object-contain grayscale opacity-50"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="pt-16 pb-20 bg-gray-50 scroll-mt-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left: CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Ready to Win with AI?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Let's discuss how the Clause Firm Advantage Program can help your team work smarter and deliver better results for clients.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                    <Calendar size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Onboarding</h4>
                    <p className="text-gray-600 text-sm">Most firms are up and running within 2-3 weeks</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                    <Handshake size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dedicated Support</h4>
                    <p className="text-gray-600 text-sm">Your success is our priority with hands-on enablement</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                    <Users size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trusted by Legal Teams</h4>
                    <p className="text-gray-600 text-sm">Join forward-thinking firms already using Clause</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <form
                action="https://formspree.io/f/xanrplkz"
                method="POST"
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="firmName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Firm / Organization
                  </label>
                  <input
                    type="text"
                    id="firmName"
                    name="firmName"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firmSize" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Firm Size
                    </label>
                    <select
                      id="firmSize"
                      name="firmSize"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 attorneys</option>
                      <option value="11-50">11-50 attorneys</option>
                      <option value="51-200">51-200 attorneys</option>
                      <option value="201-500">201-500 attorneys</option>
                      <option value="500+">500+ attorneys</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="tier" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Interested Tier
                    </label>
                    <select
                      id="tier"
                      name="tier"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select tier</option>
                      <option value="foundation">Foundation ($12K)</option>
                      <option value="professional">Professional ($25K)</option>
                      <option value="enterprise">Enterprise ($100K+)</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="What are your goals for AI adoption?"
                  ></textarea>
                </div>

                <input type="hidden" name="_subject" value="Firm Advantage Program Inquiry" />

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-full"
                >
                  Request Consultation
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Or email us at{' '}
                  <a href="mailto:info@clause.so" className="text-primary-600 hover:text-primary-700 font-medium">
                    info@clause.so
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            ref={includedRef}
            initial={{ opacity: 0, y: 20 }}
            animate={includedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
              What's Included
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything your firm needs to successfully adopt AI-powered legal workflows
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {includedTabs.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={includedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {card.description}
                </p>

                <ul className="space-y-2">
                  {card.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 bg-gray-50 scroll-mt-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Choose Your Tier
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible pricing designed to scale with your firm's AI adoption journey
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <TierCard key={tier.name} {...tier} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            ref={addOnsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={addOnsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Add-On Options
              </h2>
              <p className="text-lg text-gray-600">
                For firms that want deeper transformation or bespoke capabilities. Quoted separately.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {addOns.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={addOnsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                    {addon.icon}
                  </div>
                  <span className="text-gray-800 font-medium">{addon.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

    </div>
  );
};

export default FirmAdvantage;
