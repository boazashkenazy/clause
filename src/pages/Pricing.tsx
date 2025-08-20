import React from 'react';
import { useNavigate } from 'react-router-dom';
import PricingHero from '../components/sections/PricingHero';
import PricingSection from '../components/sections/Pricing';
import TrustSection from '../components/sections/Trust';
import Contact from '../components/sections/Contact';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate('/checkout');
  };

  return (
    <div className="pt-20">
      <PricingHero />
      <PricingSection onPurchase={handlePurchase} />
      <TrustSection />
      <Contact />
    </div>
  );
};

export default Pricing;