import React from 'react';
import Container from '../ui/Container';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 pt-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-600">Clause</h3>
            <p className="mt-4 max-w-md text-gray-600">
              Legal Intelligence for Business Users. Review, draft, and refine every agreement with business-smart AI, seamlessly integrated into Word.
            </p>

          </div>

          <div>
            <h4 className="font-medium text-gray-900">Product</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-primary-600">Features</Link></li>
              <li><Link to="/" onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-primary-600">How It Works</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-primary-600">Pricing</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary-600">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900">Support</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" onClick={() => scrollToSection('video-demo')} className="text-gray-600 hover:text-primary-600">Documentation</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary-600">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary-600">Privacy Policy</Link></li>
              <li>
                <a href="mailto:info@clause.to" className="flex items-center text-gray-600 hover:text-primary-600">
                  <Mail size={16} className="mr-1 text-primary-600" />
                  info@clause.to
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 py-6 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Clause. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;