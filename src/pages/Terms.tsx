import React from 'react';
import Container from '../components/ui/Container';

const Terms: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      <Container>
        <div className="mx-auto max-w-3xl py-16 pb-32">
          <h1 className="mb-8 text-3xl font-bold">Terms and Conditions</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600">Last updated: March 2024</p>
            
            <h2 className="mt-8 text-xl font-semibold">1. Acceptance of Terms</h2>
            <p>By accessing and using Redline's services, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy.</p>

            <h2 className="mt-8 text-xl font-semibold">2. Use License</h2>
            <p>We grant you a limited, non-exclusive, non-transferable license to use our services subject to these terms.</p>
            
            <h2 className="mt-8 text-xl font-semibold">3. User Obligations</h2>
            <ul className="list-disc pl-6">
              <li>You must provide accurate information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree not to use the service for any illegal purposes</li>
              <li>You will not attempt to reverse engineer the software</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">4. Payment Terms</h2>
            <p>Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law.</p>

            <h2 className="mt-8 text-xl font-semibold">5. Termination</h2>
            <p>We may terminate or suspend your account and access to the service immediately, without prior notice, for any breach of these Terms.</p>

            <h2 className="mt-8 text-xl font-semibold">6. Limitation of Liability</h2>
            <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>

            <h2 className="mt-8 text-xl font-semibold">7. Contact Information</h2>
            <p>For any questions regarding these terms, please contact us at:</p>
            <p>Email: redline@augmentedailabs.com</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;