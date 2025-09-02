import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import InstallStep from '../components/ui/InstallStep';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const OrganizationSetup: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useSEO({
    title: 'Organization Setup - Deploy Clause for Microsoft Word to Your Organization',
    description: 'Learn how to deploy Clause for Microsoft Word across your organization in 4 simple steps. Complete admin guide for Microsoft 365 administrators.',
    keywords: 'deploy Clause Word add-in organization, Microsoft 365 admin deployment, enterprise Word add-in setup, admin install Clause AI, organization policy management',
    canonical: 'https://clause.to/organization-setup'
  });

  const installationSteps = [
    {
      step: 1,
      title: "Navigate to Microsoft 365 Admin Center",
      description: (
        <>
          Navigate to <a href="https://admin.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold underline">admin.microsoft.com</a> and select <strong>Settings → Integrated apps → Add-ins</strong>. Note: You must be signed in as a Global admin or Exchange admin to access the Microsoft 365 admin center.
        </>
      ),
      screenshot: "/images/clause-org-guide-1.png"
    },
    {
      step: 2,
      title: 'Deploy Add-in from Microsoft Store',
      description: "Select the '+ Deploy Add-in' button, then choose 'Next' and select 'Choose from the Store' to access Microsoft's add-in marketplace.",
      screenshot: "/images/clause-org-guide-2.png"
    },
    {
      step: 3,
      title: 'Search for Clause AI and Add',
      description: "In the Microsoft Store, search for 'Clause AI' in the search box. When you find Clause AI for Word in the search results, click the 'Add' button to begin the deployment process.",
      screenshot: "/images/clause-org-guide-3.png"
    },
    {
      step: 4,
      title: 'Complete Deployment',
      description: "You've successfully deployed the Clause Word Add-in to your organization! Users will need to restart their Microsoft Word Desktop app to see the Clause Add-in appear in their ribbon. They can then access Clause from the Home tab in Word.",
      screenshot: "/images/clause-org-guide-4.png"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-10">
        <Container>
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Deploy Clause for Microsoft Word to Your Organization
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Administrators can deploy Clause across their organization in just 4 simple steps using the Microsoft 365 admin center.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-blue-800 font-medium">
                <strong>Admin Requirements:</strong> You must be signed in as a Global admin or Exchange admin to deploy organization-wide add-ins.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Installation Steps */}
      <section className="py-6 bg-white">
        <Container>
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Deployment Steps
              </h2>
              <p className="text-lg text-gray-600">
                Follow these simple steps to deploy Clause to your entire organization
              </p>
            </div>

            {installationSteps.map((step, index) => (
              <InstallStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                screenshot={step.screenshot}
                index={index}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Post-Deployment */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                After Deployment
              </h2>
              <p className="text-lg text-gray-600">
                What your users need to know to start using Clause.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For End Users</h3>
                <p className="text-gray-600 text-sm mb-4">
                  After deployment, users will need to restart Microsoft Word to see the Clause add-in. They can find Clause in the Home tab of the Word ribbon.
                </p>
                <p className="text-gray-600 text-sm">
                  Users will need to sign in with their Clause account to start using the add-in's features.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Managing Deployment</h3>
                <p className="text-gray-600 text-sm mb-4">
                  You can manage the add-in deployment, update settings, or remove it from the same Integrated apps section in the admin center.
                </p>
                <p className="text-gray-600 text-sm">
                  The add-in will automatically update for all users when new versions are released.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Training</h3>
                <p className="text-gray-600 text-sm">
                  Direct your users to our <a href="/gettingstarted" className="text-primary-600 hover:text-primary-700 underline">individual setup guide</a> for step-by-step instructions on how to use Clause features in Word.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Support?</h3>
                <p className="text-gray-600 text-sm">
                  Contact our admin support team at <a href="mailto:admin@clause.to" className="text-primary-600 hover:text-primary-700 underline">admin@clause.to</a> for deployment assistance or enterprise questions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-primary-600 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Successfully Deployed Clause?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Your organization now has access to AI-powered legal document review and drafting capabilities directly in Microsoft Word.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://app.clause.to', '_blank')}
                  className="bg-white text-primary-600 border-white hover:bg-gray-50 flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  Visit Clause App
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                  className="border-white text-white hover:bg-primary-700"
                >
                  Contact Admin Support
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default OrganizationSetup;