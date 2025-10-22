import React from 'react';
import Container from '../components/ui/Container';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      <Container>
        <div className="mx-auto max-w-3xl py-16 pb-32">
          <h1 className="mb-8 text-3xl font-bold">Clause Privacy Policy (Free Plus and Pro)</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600">Last updated: October 22, 2025</p>
            
            <p className="mt-6">This Privacy Policy applies to Clause Free Trial, Plus, and Pro subscriptions.</p>
            
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
            <p>Application data that we manage for you, e.g. Policy Files for Policy Review and Saved Prompts for Assistant are used only as needed to provide our services to you. Account information such as email address and usage statistics may be used to provide support to you, or to communicate with you about our products, services and events. We do not share any retained data with 3rd parties for marketing purposes.</p>
            <p className="mt-4">We may disclose retained information if we are required to do so by applicable law, court order, or other legal process. In such cases, Clause is committed to redirecting government requests for customer data to the customer and promptly notifying the customer of such requests, unless legally prohibited.</p>
            <p className="mt-4">Your data is never used by us, our AI providers nor any 3rd party training AI models. Our AI providers hold your data temporarily solely to generate responses and prevent abuse after which it's permanently deleted.</p>
            <p className="mt-4">Our standard model provider is Azure's OpenAI service (OpenAI models hosted and managed by Microsoft Azure in the US for best quality, performance and security). Users may elect to use Google Gemini or Anthropic Claude instead via Settings.</p>

            <h2 className="mt-8 text-xl font-semibold">4. Data Security</h2>
            <p>In addition to minimizing data retention, data access in Clause is secured using Microsoft and Google authentication. This means that account or application data stored on your behalf will comply with your company or personal authentication requirements. Clause practices are consistent with ISO/IEC 27018, the international code of practice for cloud privacy when working with PII data. We leverage Microsoft Azure's robust security measures, including advanced encryption and identity management, to ensure comprehensive protection for your data. In addition, we implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>

            <h2 className="mt-8 text-xl font-semibold">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: info@clause.so</p>
            
            <h2 className="mt-8 text-xl font-semibold">7. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. If we make material changes, we will notify you by posting an updated version on our website and, where possible, by other appropriate means. Unless otherwise required by applicable law, changes will take effect at least 7 days after we provide notice. Your continued use of our services after the effective date of any changes indicates your acceptance of those changes.</p>
            
            <h2 className="mt-8 text-xl font-semibold">Learn more about how our AI Providers protect your data</h2>
            <p>Learn more about how our AI providers protect your data when we use their API services:</p>
            <ul className="list-disc pl-6">
              <li><strong>Azure OpenAI:</strong> <a href="https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/openai/data-privacy?tabs=azure-portal" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/openai/data-privacy?tabs=azure-portal</a></li>
              <li><strong>Google:</strong> <a href="https://ai.google.dev/gemini-api/docs/usage-policies" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://ai.google.dev/gemini-api/docs/usage-policies</a> and <a href="https://ai.google.dev/gemini-api/terms" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://ai.google.dev/gemini-api/terms</a></li>
              <li><strong>Anthropic:</strong> <a href="https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;