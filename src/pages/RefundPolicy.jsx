import { motion } from 'framer-motion';

const RefundPolicy = () => {
  return (
    <div className="pt-[113px] min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Refund Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Overview</h2>
              <p>
                At Kotton Fruit, we strive to ensure your complete satisfaction with every purchase. 
                This refund policy outlines the terms and conditions for returns and refunds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Exchange Policy</h2>
              <p>
                We offer a 7-day exchange policy from the date of delivery. Items must be:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Unworn and unwashed</li>
                <li>In original packaging with all tags attached</li>
                <li>In the same condition as received</li>
                <li>With original receipt or proof of purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Refund Eligibility</h2>
              <p>Refunds may be issued in the following cases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Defective or damaged items received</li>
                <li>Wrong item received</li>
                <li>Item significantly different from description</li>
                <li>Exchange not possible due to stock unavailability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Non-Refundable Items</h2>
              <p>The following items are not eligible for refund:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Items worn, washed, or damaged by customer</li>
                <li>Items without original tags or packaging</li>
                <li>Items returned after 7 days</li>
                <li>Sale or clearance items (unless defective)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Refund Process</h2>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact us within 48 hours of delivery for damaged/defective items</li>
                <li>For exchanges, contact us within 7 days of delivery</li>
                <li>Provide order number and reason for return</li>
                <li>We will provide return instructions and authorization</li>
                <li>Ship the item back to us (return shipping may apply)</li>
                <li>Once received and inspected, refund will be processed within 5-7 business days</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Refund Method</h2>
              <p>
                Refunds will be issued to the original payment method used for purchase. 
                Processing time may vary depending on your bank or payment provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Us</h2>
              <p>For refund inquiries, please contact us:</p>
              <ul className="list-none space-y-2 ml-4">
                <li><strong>Email:</strong> Contact@kottonfruit.com</li>
                <li><strong>Phone:</strong> +92 321 8900074</li>
                <li><strong>WhatsApp:</strong> +92 300 1234567</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;

