import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day exchange policy. If you are not satisfied with your purchase, you can exchange it within 7 days of delivery. Items must be unworn, unwashed, and in their original packaging with tags attached.',
    },
    {
      question: 'Do you offer free shipping?',
      answer: 'Yes! We offer free shipping for all orders over PKR 4,000. For orders below PKR 4,000, shipping charges will apply.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 3-5 business days within Pakistan. Express shipping options are also available for faster delivery.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Debit/Credit Cards, Bank Transfer, and Cash on Delivery (COD). All payment methods are secure and encrypted.',
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes! Once your order is shipped, you will receive a tracking number via email and SMS. You can use this to track your order in real-time.',
    },
    {
      question: 'What sizes do you offer?',
      answer: 'We offer sizes from Small to XL. Please refer to our size chart on each product page for accurate measurements. Our products are unisex and feature oversized fits.',
    },
    {
      question: 'Are your products unisex?',
      answer: 'Yes, most of our products are designed to be unisex with comfortable oversized fits that work for everyone.',
    },
    {
      question: 'How do I care for my Kotton Fruit products?',
      answer: 'We recommend washing in cold water, avoiding bleach, and not ironing directly over prints. Please refer to the care instructions on each product page for specific details.',
    },
    {
      question: 'Do you offer wholesale/bulk orders?',
      answer: 'Yes! We offer wholesale and bulk purchase options. Please contact us via WhatsApp or email for wholesale inquiries and pricing.',
    },
    {
      question: 'What if I receive a damaged item?',
      answer: 'If you receive a damaged or defective item, please contact us immediately within 48 hours of delivery. We will arrange for a replacement or full refund.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-[113px] min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products, shipping, returns, and more.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-gray-50 rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Still have questions?</h2>
          <p className="text-gray-700 mb-4">
            If you couldn't find the answer you're looking for, feel free to reach out to us.
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> Contact@kottonfruit.com</p>
            <p><strong>Phone:</strong> +92 321 8900074</p>
            <p><strong>WhatsApp:</strong> +92 300 1234567</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;

