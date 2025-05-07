export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingPlanProps {
  title: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}