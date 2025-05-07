import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-600">Redline</h3>
            <p className="mt-4 max-w-md text-gray-600">
              Policy-Powered Editing for Microsoft Word. Automatically redline documents based on your business policies, without leaving Word.
            </p>

            <div className="mt-6">
              <h4 className="font-medium text-gray-900">Stay updated</h4>
              <div className="mt-2 flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-md border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <Button 
                  variant="primary" 
                  className="rounded-l-none"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900">Product</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-primary-600">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-primary-600">How It Works</a></li>
              <li><a href="/pricing" className="text-gray-600 hover:text-primary-600">Pricing</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-primary-600">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900">Support</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Contact Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Status</a></li>
              <li>
                <a href="mailto:contact@redline.com" className="flex items-center text-gray-600 hover:text-primary-600">
                  <Mail size={16} className="mr-1 text-primary-600" />
                  contact@redline.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 py-6 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Redline. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;