import React from 'react';
import { useNavigate } from 'react-router-dom';
import PricingHero from '../components/sections/PricingHero';
import PricingSection from '../components/sections/Pricing';
import TrustSection from '../components/sections/Trust';
import Contact from '../components/sections/Contact';
import useSEO from '../hooks/useSEO';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  useSEO({
    title: 'Pricing - Clause | Legal Intelligence for Business',
    description: 'Choose the perfect Clause plan for your legal document needs. Start with a free trial or upgrade to Plus, Pro, or Enterprise for advanced AI-powered contract review.',
    keywords: 'Clause pricing, legal AI pricing, contract review software cost, Word add-in pricing, legal document automation pricing',
    canonical: 'https://clause.so/pricing'
  });

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