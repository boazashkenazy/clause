import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('PHoVjZUE9j76eJcEH');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      console.log('Sending email with data:', {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      const result = await emailjs.send(
        'service_35mt8ok',
        'template_dzfpoak',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'PHoVjZUE9j76eJcEH'
      );

      console.log('EmailJS success:', result);
      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error details:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 pt-24 pb-12">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div 
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Have questions or need assistance? We're here to help! Fill out the form and our team will get back to you shortly.
              </p>
              
              <div className="mt-8">
                <div className="flex items-center">
                  <div className="rounded-full bg-primary-100 p-2 text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email us</h3>
                    <p className="mt-1 text-gray-600">info@clause.to</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
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
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Message sent successfully!</h3>
                  <p className="mt-2 text-gray-600">We'll get back to you as soon as possible.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
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
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                      ></textarea>
                    </div>
                    
                    {isError && (
                      <div className="rounded-md bg-red-50 p-4">
                        <div className="text-sm text-red-700">
                          There was an error sending your message. Please try again or contact us directly at info@clause.to
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
                        {isLoading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
        
        {/* Divider Line */}
        <div className="mx-auto max-w-4xl mt-16 mb-8">
          <div className="border-t border-gray-200"></div>
        </div>
        
        {/* Newsletter Signup Section */}
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-sm text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to the Clause Newsletter</h3>
            <p className="text-gray-600 mb-6">Stay updated with the latest features, legal insights, and product updates.</p>
            <div>
              <iframe
                src="https://link.augmentedailabs.com/widget/form/KtQ50mlmw9NpQgyUksHh"
                style={{width:'100%',height:'432px',border:'none',borderRadius:'8px'}}
                id="inline-KtQ50mlmw9NpQgyUksHh" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Clause.to Newsletter"
                data-height="432"
                data-layout-iframe-id="inline-KtQ50mlmw9NpQgyUksHh"
                data-form-id="KtQ50mlmw9NpQgyUksHh"
                title="Clause.to Newsletter"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;