import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const NotFound: React.FC = () => {
  useSEO({
    title: '404 - Page Not Found | Clause',
    description: 'The page you are looking for could not be found. Return to Clause homepage or explore our legal AI solutions for Microsoft Word.',
    canonical: 'https://clause.so/404'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <Container>
        <div className="mx-auto max-w-2xl py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
              <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The page you're looking for seems to have disappeared. Don't worry, it happens to the best of us!
              </p>
              <p className="text-gray-500">
                Let's get you back on track with Clause's AI-powered legal document review.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link to="/">
                <Button variant="primary" size="lg" className="flex items-center gap-2">
                  <Home size={20} />
                  Back to Home
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.history.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Go Back
              </Button>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-center mb-6">
                <Search size={24} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Looking for something specific?
                </h3>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <Link 
                  to="/gettingstarted" 
                  className="p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-left"
                >
                  <h4 className="font-medium text-gray-900 mb-2">Getting Started</h4>
                  <p className="text-sm text-gray-600">Learn how to install and use Clause</p>
                </Link>
                
                <Link 
                  to="/pricing" 
                  className="p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-left"
                >
                  <h4 className="font-medium text-gray-900 mb-2">Pricing Plans</h4>
                  <p className="text-sm text-gray-600">Find the perfect plan for your needs</p>
                </Link>
                
                <Link 
                  to="/faq" 
                  className="p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-left"
                >
                  <h4 className="font-medium text-gray-900 mb-2">FAQ</h4>
                  <p className="text-sm text-gray-600">Get answers to common questions</p>
                </Link>
                
                <div 
                  className="p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-left cursor-pointer"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                >
                  <h4 className="font-medium text-gray-900 mb-2">Contact Support</h4>
                  <p className="text-sm text-gray-600">Need help? We're here for you</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;