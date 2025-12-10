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
import GettingStarted from './pages/GettingStarted';
import OrganizationSetup from './pages/OrganizationSetup';
import ClauseAssistant from './pages/ClauseAssistant';
import ClauseReviewer from './pages/ClauseReviewer';
import ClauseExplorer from './pages/ClauseExplorer';
import IntegratedServices from './pages/IntegratedServices';
import FirmAdvantage from './pages/FirmAdvantage';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/gettingstarted" element={<GettingStarted />} />
            <Route path="/organization-setup" element={<OrganizationSetup />} />
            <Route path="/assistant" element={<ClauseAssistant />} />
            <Route path="/reviewer" element={<ClauseReviewer />} />
            <Route path="/explorer" element={<ClauseExplorer />} />
            <Route path="/integratedservices" element={<IntegratedServices />} />
            <Route path="/advantage" element={<FirmAdvantage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;