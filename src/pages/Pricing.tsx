import React from 'react';
import { useNavigate } from 'react-router-dom';
import PricingSection from '../components/sections/Pricing';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate('/checkout');
  };

  return (
    <div className="pt-20">
      <PricingSection onPurchase={handlePurchase} />
    </div>
  );
};

export default Pricing;