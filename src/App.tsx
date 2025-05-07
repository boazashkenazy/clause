import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Checkout from './pages/Checkout';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import VideoModal from './components/ui/VideoModal';
import { useModal } from './hooks/useModal';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const demoVideoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const { isOpen, open, close } = useModal();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home onDemoClick={open} />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
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