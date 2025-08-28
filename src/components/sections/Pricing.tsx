import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { PricingPlanProps } from '../../types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PricingCardProps extends PricingPlanProps {
  isYearly: boolean;
  index: number;
  onPurchase?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  cta, 
  popular, 
  isYearly,
  index,
  onPurchase
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
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative rounded-2xl border ${popular ? 'border-primary-600' : 'border-gray-200'} bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8 flex flex-col h-full`}
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-max rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold uppercase text-white">
          Most Popular
        </div>
      )}
      
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      
      <div className={price ? "my-6" : "my-3"}>
        {price ? (
          <>
            {price.monthly === 0 ? (
              <span className="text-4xl font-bold text-primary-600">Free</span>
            ) : (
              <>
                <span className="text-4xl font-bold text-gray-900">${price.monthly}</span>
                <span className="text-gray-600">/month</span>
              </>
            )}
          </>
        ) : null}
      </div>
      
      <ul className={`space-y-3 flex-grow ${price ? "mb-6" : "mb-8"}`}>
        {features.map((feature, i) => {
          const isCreditsFeature = feature.includes('credits');
          return (
            <li key={i} className="flex items-center">
              <Check size={18} className="mr-2 text-primary-500" />
              <span className="text-gray-600">{feature}</span>
              {isCreditsFeature && (
                <div className="relative group ml-1">
                  <Info size={14} className="text-gray-400 cursor-help" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none w-64 text-center z-10">
                    Drafting a 1,000 word document consumes less than 2 credits. Running Policy Review with 10 policies against a 2,000 word document (e.g. a basic NDA) uses approximately 3 credits
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      
      <Button 
        variant={popular ? 'primary' : 'outline'} 
        className="w-full"
        onClick={
          cta === "Call Sales Team" ? () => {
            // Scroll to contact section on current page
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          } : cta === "Try Clause Now Free" ? () => {
            // Redirect to Getting Started page
            window.location.href = '/gettingstarted';
          } : cta === "Get Plus" || cta === "Get Pro" ? () => {
            // Link to app.clause.to for paid subscription plans
            window.open('https://app.clause.to', '_blank');
          } : onPurchase
        }
      >
        {cta}
      </Button>
    </motion.div>
  );
};


interface PricingSectionProps {
  onPurchase?: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onPurchase }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans: PricingPlanProps[] = [
    {
      title: "Free Trial",
      price: { monthly: 0, yearly: 0 },
      description: "No credit card required.",
      features: [
        "30-day free trial",
        "Full feature access",
        "500 credits"
      ],
      cta: "Try Clause Now Free"
    },
    {
      title: "Plus",
      price: { monthly: 30, yearly: 306 },
      description: "Perfect for individuals.",
      features: [
        "Priority support",
        "Full feature access",
        "2000 credits/month"
      ],
      cta: "Get Plus",
      popular: true
    },
    {
      title: "Pro",
      price: { monthly: 150, yearly: 1530 },
      description: "Ideal for power users.",
      features: [
        "Premium support",
        "Full feature access",
        "10,000 credits/month"
      ],
      cta: "Get Pro"
    },
    {
      title: "Enterprise",
      price: null,
      description: "For large organizations.",
      features: [
        "Teams",
        "Custom integrations",
        "Dedicated account manager + support",
        "Premium support",
        "Custom training and onboarding"
      ],
      cta: "Call Sales Team"
    }
  ];

  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <Container>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <PricingCard 
              key={plan.title} 
              {...plan} 
              isYearly={false}
              index={index}
              onPurchase={onPurchase}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;