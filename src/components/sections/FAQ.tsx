import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import FAQAccordion from '../ui/FAQAccordion';
import Button from '../ui/Button';
import { FAQItemProps } from '../../types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const FAQ: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [supportRef, supportInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    issueType: 'general'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    emailjs.init('PHoVjZUE9j76eJcEH');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      await emailjs.send(
        'service_35mt8ok',
        'template_dzfpoak',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: `[${formData.issueType.toUpperCase()}] ${formData.subject}`,
          message: `Issue Type: ${formData.issueType}\n\n${formData.message}`,
        },
        'PHoVjZUE9j76eJcEH'
      );

      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        issueType: 'general'
      });
    } catch (error) {
      console.error('EmailJS error details:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const faqItems: FAQItemProps[] = [
    {
      question: "Is my document data secure when using Clause?",
      answer: "Yes, your data remains completely private and secure. We don't store any of your document content, chat histories, or processing results. Your data is only processed temporarily to provide our service, then immediately discarded."
    },
    {
      question: "Do you collect or store my Word documents?",
      answer: "No, we do not collect, store, or retain the contents of your Word documents. Documents are processed temporarily to provide analysis and suggestions, then immediately discarded from our systems."
    },
    {
      question: "What happens to my chat dialog histories and prompts?",
      answer: "We do not store chat dialog histories, prompts, or responses. These interactions are processed in real-time to provide our service, but are not retained in our systems or used for any other purpose."
    },
    {
      question: "Do you use my data to train AI models?",
      answer: "No, we never use your data for training AI models, marketing purposes, or commercial third-party sharing. Your content remains private and is only processed as minimally necessary to deliver our service."
    },
    {
      question: "What AI services do you use and how do they handle my data?",
      answer: "We use OpenAI services to power our features. These providers do not use your data for training their models and may retain data temporarily (up to 30 days) for service delivery purposes, after which it's permanently deleted."
    },
    {
      question: "Can I use Clause on my work device?",
      answer: "Yes. Installing the Clause for Word may require approval from your IT department."
    },
    {
      question: "Where is my data processed?",
      answer: "Your data is processed through OpenAI's secure infrastructure with enterprise-grade security measures. Data processing occurs only during active use of the service."
    },
    {
      question: "What versions of Microsoft Word does Clause support?",
      answer: "Clause supports Microsoft Word 2019 Desktop and later versions on both Windows and macOS platforms, and Microsoft Word for Web (Office 365)."
    },
    {
      question: "What is a credit?",
      answer: "Credits are used to power Clause's AI features. Usage varies by task and document size. For example:\n\nDrafting a 1,000 word document consumes less than 2 credits\nRunning Policy Review with 10 policies against a 2,000 word document (e.g., a basic NDA) uses approximately 3 credits\n\nYour monthly credit allowance resets each billing cycle, so you can use Clause consistently throughout the month."
    },
    {
      question: "Can I transfer my license to another computer?",
      answer: "The license is for the user and is associated with your email address. You can sign in using Google or Microsoft authentication from any device."
    },
    {
      question: "Do you offer a trial version?",
      answer: "Yes, we offer 30 day free trial with no credit card required."
    }
  ];

  return (
    <>
      <section id="faq" className="bg-white py-24">
        <Container>
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Find answers to common questions about Clause.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <FAQAccordion items={faqItems} />
          </motion.div>
        </Container>
      </section>

      {/* Support Contact Section */}
      <section id="support-contact" className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div 
              ref={supportRef}
              initial={{ opacity: 0, x: -30 }}
              animate={supportInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Need Support?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Having technical issues or need help with Clause? Submit a support request and our team will assist you promptly.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <div className="rounded-full bg-primary-100 p-2 text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-6.364 15.364M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Technical Support</h3>
                    <p className="mt-1 text-gray-600">Get help with installation, features, and troubleshooting</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="rounded-full bg-primary-100 p-2 text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email Support</h3>
                    <p className="mt-1 text-gray-600">info@clause.to</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={supportInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl bg-white p-8 shadow-sm"
            >
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Support request submitted!</h3>
                  <p className="mt-2 text-gray-600">We'll get back to you as soon as possible.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setIsSuccess(false)}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
                    <div>
                      <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">Issue Type</label>
                      <select 
                        id="issueType" 
                        name="issueType"
                        value={formData.issueType}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full appearance-none rounded-md border border-gray-300 pl-3 pr-12 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K')] bg-no-repeat bg-[length:12px] bg-[position:right_16px_center]"
                      >
                        <option value="general">General Support</option>
                        <option value="technical">Technical Issue</option>
                        <option value="billing">Billing Question</option>
                        <option value="feature">Feature Request</option>
                        <option value="bug">Bug Report</option>
                      </select>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500" 
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please describe your issue or question in detail..."
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                      ></textarea>
                    </div>
                    
                    {isError && (
                      <div className="rounded-md bg-red-50 p-4">
                        <div className="text-sm text-red-700">
                          There was an error submitting your support request. Please try again or contact us directly at info@clause.to
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <Button 
                        variant="primary" 
                        className="w-full"
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Submitting...' : 'Submit Support Request'}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
        </Container>
      </section>
    </>
  );
};

export default FAQ;