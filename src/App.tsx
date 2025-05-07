import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Checkout from './pages/Checkout';
import VideoModal from './components/ui/VideoModal';
import { useModal } from './hooks/useModal';

function App() {
  const demoVideoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const { isOpen, open, close } = useModal();

  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home onDemoClick={open} />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        
        <Footer />
        
        <VideoModal 
          isOpen={isOpen}
          onClose={close}
          videoSrc={demoVideoSrc}
        />
      </div>
    </Router>
  );
}

export default App;