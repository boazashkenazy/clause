import React from 'react';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import Newsletter from '../components/sections/Newsletter';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Contact />
      <Newsletter />
    </>
  );
};

export default Home;