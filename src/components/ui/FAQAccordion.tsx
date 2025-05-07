import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItemProps } from '../../types';

const FAQItem: React.FC<FAQItemProps & { isOpen: boolean; toggle: () => void }> = ({ 
  question, 
  answer, 
  isOpen, 
  toggle 
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-gray-900 hover:text-blue-600"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown 
          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-6 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQAccordionProps {
  items: FAQItemProps[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="divide-y divide-gray-200 rounded-lg bg-white">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          toggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;