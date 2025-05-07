import React from 'react';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import VideoDemo from '../components/sections/VideoDemo';
import Contact from '../components/sections/Contact';

interface HomeProps {
  onDemoClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onDemoClick }) => {
  return (
    <>
      <Hero onDemoClick={onDemoClick} />
      <Features />
      <HowItWorks />
      <VideoDemo onDemoClick={onDemoClick} />
      <Contact />
    </>
  );
};

export default Home;