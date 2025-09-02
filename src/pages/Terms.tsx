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
            <p>By accessing and using Clause's services, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy.</p>

            <h2 className="mt-8 text-xl font-semibold">2. Use License</h2>
            <p>We grant you a limited, non-exclusive, non-transferable license to use our services subject to these terms. All rights, title, and interest in and to the software, the services, and all underlying intellectual property, including but not limited to trademarks, are and shall remain the exclusive property of Clause. Except for the limited use license expressly granted to you under these Terms, you are not granted any rights to, or interest in, any of Clause's intellectual property. You acknowledge that you do not acquire any ownership rights by using the services or accessing the software.</p>
            
            <h2 className="mt-8 text-xl font-semibold">3. User Obligations</h2>
            <ul className="list-disc pl-6">
              <li>You must provide accurate information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree not to use the service for any illegal purposes</li>
              <li>You will not attempt to reverse engineer the software</li>
              <li>You are solely responsible for obtaining, maintaining, and paying for all hardware, software, internet access, and other equipment or services necessary to access and use Clause's services</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">4. Payment Terms</h2>
            <p>Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law.</p>

            <h2 className="mt-8 text-xl font-semibold">5. Termination</h2>
            <p>We may terminate or suspend your account and access to the service immediately, without prior notice, for any breach of these Terms, as determined in our sole discretion.</p>

            <h2 className="mt-8 text-xl font-semibold">6. Limitation of Liability</h2>
            <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. We are also not liable for any downtime or periods when the service is unavailable. In no event shall our aggregate liability to you for any claims arising out of or relating to these Terms or your use of the services exceed the total amount paid by you to us for the services in the twelve (12) months preceding the claim.</p>
            
            <p className="mt-4">We may revise and update these Terms and Conditions from time to time, and at any time, in our sole discretion. All changes are effective immediately upon being updated on this site and apply to all access to and use of the site or services thereafter. Your continued use of the site and our services following any update to the Terms and Conditions will mean that you accept and agree to the revised Terms and Conditions.</p>

            <h2 className="mt-8 text-xl font-semibold">7. Contact Information</h2>
            <p>For any questions regarding these terms, please contact us at:</p>
            <p>Email: info@clause.to</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;