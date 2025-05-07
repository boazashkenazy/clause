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

  const currentPrice = isYearly ? price.yearly : price.monthly;
  const discount = Math.round(100 - (price.yearly / price.monthly * 100) / 12);

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
        <span className="text-4xl font-bold text-gray-900">${currentPrice}</span>
        <span className="text-gray-600">/{isYearly ? 'year' : 'month'}</span>
        
        {isYearly && (
          <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            Save {discount}%
          </span>
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
      title: "Individual",
      price: { monthly: 19, yearly: 182 },
      description: "Perfect for single users working independently.",
      features: [
        "Full access to Redline plugin",
        "Custom policy creation",
        "Unlimited documents",
        "Basic support",
        "Regular updates"
      ],
      cta: "Get Started"
    },
    {
      title: "Team",
      price: { monthly: 49, yearly: 470 },
      description: "Ideal for small teams with shared policies.",
      features: [
        "Everything in Individual",
        "5 user licenses",
        "Shared policy libraries",
        "Team admin controls",
        "Priority support",
        "Advanced statistics"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      title: "Enterprise",
      price: { monthly: 129, yearly: 1238 },
      description: "For large organizations with complex needs.",
      features: [
        "Everything in Team",
        "Unlimited users",
        "Custom integration",
        "Dedicated account manager",
        "SSO authentication",
        "Custom training sessions"
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Choose the plan that works best for you or your team. All plans include full access to Redline's powerful features.
          </p>
          
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