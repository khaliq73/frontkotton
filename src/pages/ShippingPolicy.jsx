import { motion } from 'framer-motion';

const ShippingPolicy = () => {
  return (
    <div className="pt-[113px] min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Shipping Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Free Shipping</h2>
              <p>
                We offer <strong>FREE SHIPPING</strong> for all orders over <strong>PKR 4,000</strong>. 
                For orders below PKR 4,000, standard shipping charges will apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Shipping Methods</h2>
              <p>We offer the following shipping options:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Standard Shipping:</strong> 3-5 business days (PKR 200-300)</li>
                <li><strong>Express Shipping:</strong> 1-2 business days (PKR 500-700)</li>
                <li><strong>Free Shipping:</strong> Available for orders over PKR 4,000</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Processing Time</h2>
              <p>
                Orders are typically processed within 1-2 business days. Processing may take longer 
                during sale periods or holidays. You will receive an email confirmation once your 
                order has been shipped.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Shipping Locations</h2>
              <p>
                We currently ship within Pakistan only. We are working on expanding our shipping 
                services to international locations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Order Tracking</h2>
              <p>
                Once your order is shipped, you will receive a tracking number via email and SMS. 
                You can use this tracking number to monitor your order's delivery status in real-time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Delivery Issues</h2>
              <p>If you experience any delivery issues:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact us immediately if your order is delayed</li>
                <li>Report damaged packages within 48 hours of delivery</li>
                <li>Ensure someone is available to receive the package</li>
                <li>Provide accurate shipping address to avoid delivery delays</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Undeliverable Packages</h2>
              <p>
                If a package is returned to us due to an incorrect address or failure to receive, 
                we will contact you to arrange reshipment. Additional shipping charges may apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Us</h2>
              <p>For shipping inquiries, please contact us:</p>
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

export default ShippingPolicy;

