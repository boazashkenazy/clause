import React from 'react';
import Container from '../components/ui/Container';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      <Container>
        <div className="mx-auto max-w-3xl py-16 pb-32">
          <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600">Last updated: March 2024</p>
            
            <h2 className="mt-8 text-xl font-semibold">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including when you:</p>
            <ul className="list-disc pl-6">
              <li>Create an account</li>
              <li>Use our services</li>
              <li>Contact our support team</li>
              <li>Subscribe to our newsletter</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">3. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>

            <h2 className="mt-8 text-xl font-semibold">4. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: redline@augmentedailabs.com</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;