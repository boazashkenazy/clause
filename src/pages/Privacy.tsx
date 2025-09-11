import React from 'react';
import Container from '../components/ui/Container';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      <Container>
        <div className="mx-auto max-w-3xl py-16 pb-32">
          <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600">Last updated: September 2025</p>
            
            <p className="mt-6">This Privacy Policy applies to all our services, including any new, additional, or complementary services we may offer, unless stated otherwise. All current and future offerings are covered by this policy unless expressly excluded.</p>
            
            <h2 className="mt-8 text-xl font-semibold">1. Information we retain</h2>
            <p>We retain only the following information:</p>
            <ul className="list-disc pl-6">
              <li>User email address and billing information</li>
              <li>Usage statistics</li>
              <li>Communications with our support team</li>
              <li>Application data only as required to provide our services to you</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">2. Information that we do not retain</h2>
            <ul className="list-disc pl-6">
              <li>Chat dialog histories, including prompts and responses</li>
              <li>Contents of Word documents processed by Clause for Word</li>
              <li>Results of processing including generated analysis or language</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">3. How we use information that we retain</h2>
            <p>Application data that we manage for you, e.g. Policy Files for Policy Review, are used only as needed to provide our services to you. Account information such as email address and usage statistics may be used to provide support to you, or to communicate with you about our products, services and events. We do not share any retained data with 3rd parties.</p>
            <p className="mt-4">We may disclose retained information if we are required to do so by applicable law, court order, or other legal process.</p>
            <p className="mt-4">Clause for Word uses Microsoft Azure OpenAI services which have a zero data retention policy. Calls to Azure OpenAI are not stored or retained by Microsoft or any other 3rd party.</p>

            <h2 className="mt-8 text-xl font-semibold">4. Data Security</h2>
            <p>In addition to minimizing data retention, data access in Clause is secured using Microsoft and Google authentication. This means that account or application data stored on your behalf will comply with your company or personal authentication requirements. In addition, we implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>

            <h2 className="mt-8 text-xl font-semibold">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: info@clause.to</p>
            
            <h2 className="mt-8 text-xl font-semibold">7. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. If we make material changes, we will notify you by posting an updated version on our website and, where possible, by other appropriate means. Unless otherwise required by applicable law, changes will take effect at least 7 days after we provide notice. Your continued use of our services after the effective date of any changes indicates your acceptance of those changes.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;