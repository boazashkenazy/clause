import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import InstallStep from '../components/ui/InstallStep';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ExternalLink, HelpCircle } from 'lucide-react';

const GettingStarted: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const installationSteps = [
    {
      step: 1,
      title: "Click Home → Add-ins in the MS Word task ribbon",
      description: "Open Microsoft Word and navigate to the Home tab in the ribbon. Look for the Add-ins button and click it to open the add-ins panel."
    },
    {
      step: 2,
      title: 'Click the "More Add-ins" button',
      description: "In the add-ins panel that opens, you'll see a 'More Add-ins' button. Click this to access the Office Add-ins store where you can find Clause."
    },
    {
      step: 3,
      title: 'Search for "Clause AI" and click the "Add" button',
      description: "In the Office Add-ins store, use the search box to look for 'Clause AI'. When you find it in the search results, click the 'Add' button to install the Clause for Word Add-in."
    },
    {
      step: 4,
      title: 'Switch to "Reviewing" mode',
      description: "After installation, you'll see the Clause panel alongside your document. Switch Word to 'Reviewing' mode to enable track changes, which Clause uses to show its suggestions and edits."
    },
    {
      step: 5,
      title: 'Select the Policy Review tab and click the play button',
      description: "In the Clause add-in panel, click on the 'Policy Review' tab. You'll see a play button - click it to run Clause's policy review on your document using the example policies."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <Container>
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Get Started with Clause for Microsoft Word
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Install and set up Clause in just 5 simple steps. Start reviewing documents with AI-powered policy analysis in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.open('https://appsource.microsoft.com/en-us/product/office/WA200009091', '_blank')}
                className="flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Install from Microsoft AppSource
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/Clause for Word Quick Start No NDA.pdf', '_blank')}
                className="flex items-center gap-2"
              >
                <Download size={20} />
                Download PDF Guide
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Installation Steps */}
      <section className="py-20 bg-white">
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
                Installation Steps
              </h2>
              <p className="text-lg text-gray-600">
                Follow these simple steps to install and start using Clause in Microsoft Word
              </p>
            </div>

            {installationSteps.map((step, index) => (
              <InstallStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Try the Demo */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Try the Policy Review Feature
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Once installed, test Clause's policy review capabilities with our example NDA. The add-in will apply "Example - Basic NDA" policies to help you see how Clause can improve your document review process.
              </p>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary-600" />
                  Quick Tutorial
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                    <span>Open any Word document or use our sample NDA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                    <span>Select the "Policy Review" tab in the Clause panel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                    <span>Click the play button to run policy analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">4</span>
                    <span>Review the AI-generated suggestions and track changes</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Troubleshooting */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Troubleshooting
              </h2>
              <p className="text-lg text-gray-600">
                Having issues with installation? Here are some common solutions.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can't find Clause AI in the store?</h3>
                <p className="text-gray-600 text-sm">
                  Make sure you're searching for "Clause AI" exactly. You can also try searching just "Clause" or visit the Microsoft AppSource directly using our install link above.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Add-in not appearing after install?</h3>
                <p className="text-gray-600 text-sm">
                  Try restarting Microsoft Word. If the issue persists, check that your Office version is up to date and supports add-ins.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need help with your account?</h3>
                <p className="text-gray-600 text-sm">
                  Visit <a href="https://app.clause.to" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">app.clause.to</a> to sign in or create your account and manage your subscription.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Still need help?</h3>
                <p className="text-gray-600 text-sm">
                  Contact our support team at <a href="mailto:info@clause.to" className="text-primary-600 hover:text-primary-700">info@clause.to</a> and we'll help you get set up.
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
                Ready to Transform Your Document Review?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Now that you have Clause installed, explore all the features available to streamline your legal document workflow.
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
                  Contact Support
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GettingStarted;