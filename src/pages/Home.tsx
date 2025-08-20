import React from 'react';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Contact />
    </>
  );
};

export default Home;