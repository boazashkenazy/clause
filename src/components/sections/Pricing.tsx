import React, { useState } from 'react';
import { Check } from 'lucide-react';
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

  const currentPrice = price ? (isYearly ? price.yearly : price.monthly) : null;
  const discount = price ? Math.round(100 - (price.yearly / price.monthly * 100) / 12) : 0;

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative rounded-2xl border ${popular ? 'border-primary-600' : 'border-gray-200'} bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8`}
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
      
      <div className="my-6">
        {price ? (
          <>
            <span className="text-4xl font-bold text-gray-900">${currentPrice}</span>
            <span className="text-gray-600">/{isYearly ? 'year' : 'month'}</span>
            
            {isYearly && (
              <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                Save {discount}%
              </span>
            )}
          </>
        ) : (
          <span className="text-2xl font-medium text-gray-900">Contact Us</span>
        )}
      </div>
      
      <ul className="mb-8 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <Check size={18} className="mr-2 text-primary-500" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={popular ? 'primary' : 'outline'} 
        className="w-full"
        onClick={onPurchase}
      >
        {cta}
      </Button>
    </motion.div>
  );
};

const PricingToggle: React.FC<{
  isYearly: boolean;
  onChange: (value: boolean) => void;
}> = ({ isYearly, onChange }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <span className={`font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
      <button
        type="button"
        className={`relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          isYearly ? 'bg-primary-600' : 'bg-gray-300'
        }`}
        role="switch"
        aria-checked={isYearly}
        onClick={() => onChange(!isYearly)}
      >
        <span className="sr-only">Toggle yearly billing</span>
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            isYearly ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
      <span className={`font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
        Yearly <span className="rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-semibold text-green-800">Save 20%</span>
      </span>
    </div>
  );
};

interface PricingSectionProps {
  onPurchase?: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onPurchase }) => {
  const [isYearly, setIsYearly] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans: PricingPlanProps[] = [
    {
      title: "Solo",
      price: { monthly: 20, yearly: 200 },
      description: "Perfect for individual legal professionals.",
      features: [
        "1 user license",
        "Basic policy templates",
        "Email support",
        "Regular updates",
        "14-day free trial"
      ],
      cta: "Start Free Trial"
    },
    {
      title: "Team",
      price: { monthly: 50, yearly: 500 },
      description: "Ideal for small firms or in-house teams.",
      features: [
        "Up to 5 user licenses",
        "Advanced policy templates",
        "Priority support",
        "Team collaboration features",
        "Custom policy creation"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      title: "Enterprise",
      price: null,
      description: "For large organizations with complex needs.",
      features: [
        "Unlimited users",
        "Custom policy development",
        "Dedicated account manager",
        "Premium support",
        "Custom integration & training"
      ],
      cta: "Contact Sales"
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
          <div className="mt-10">
            <PricingToggle isYearly={isYearly} onChange={setIsYearly} />
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard 
              key={plan.title} 
              {...plan} 
              isYearly={isYearly}
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