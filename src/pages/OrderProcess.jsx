import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const OrderProcess = () => {
  const steps = [
    {
      number: 1,
      title: 'Browse & Select',
      description: 'Browse our collections and select the products you want. Add items to your cart and proceed to checkout.',
    },
    {
      number: 2,
      title: 'Place Order',
      description: 'Fill in your shipping details and select your preferred payment method. Review your order and confirm.',
    },
    {
      number: 3,
      title: 'Payment',
      description: 'Complete payment through our secure payment gateway. We accept Debit/Credit Cards, Bank Transfer, or COD.',
    },
    {
      number: 4,
      title: 'Order Confirmation',
      description: 'You will receive an email confirmation with your order details and order number.',
    },
    {
      number: 5,
      title: 'Processing',
      description: 'We process your order within 1-2 business days. You will be notified once your order is ready to ship.',
    },
    {
      number: 6,
      title: 'Shipping',
      description: 'Your order is shipped via our delivery partners. You will receive a tracking number via email and SMS.',
    },
    {
      number: 7,
      title: 'Delivery',
      description: 'Your order will be delivered to your specified address within 3-5 business days (standard shipping).',
    },
  ];

  return (
    <div className="pt-[113px] min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Order Process
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Here's a step-by-step guide on how to place and track your order with Kotton Fruit.
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg relative z-10">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 bg-gray-200" style={{ height: 'calc(100% + 1rem)' }} />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 ml-9">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 p-6 bg-gray-50 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Need Help?</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about the ordering process, our customer service team is here to help.
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> Contact@kottonfruit.com</p>
              <p><strong>Phone:</strong> +92 321 8900074</p>
              <p><strong>WhatsApp:</strong> +92 300 1234567</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderProcess;

