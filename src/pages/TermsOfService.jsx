import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="pt-[113px] min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <p className="text-sm text-gray-600 mb-6">
                Last updated: {new Date().getFullYear()}
              </p>
              <p>
                Welcome to Kotton Fruit. By accessing and using our website, you agree to be bound 
                by these Terms of Service. Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Acceptance of Terms</h2>
              <p>
                By accessing, browsing, or using this website, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service and all applicable laws 
                and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Use of Website</h2>
              <p>You agree to use our website only for lawful purposes and in a way that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Does not infringe on the rights of others</li>
                <li>Does not violate any applicable laws or regulations</li>
                <li>Does not harm, disable, or impair the website</li>
                <li>Does not attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Product Information</h2>
              <p>
                We strive to provide accurate product descriptions, images, and pricing. However, 
                we do not warrant that product descriptions or other content on this site is accurate, 
                complete, reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Pricing and Payment</h2>
              <p>
                All prices are in Pakistani Rupees (PKR) unless otherwise stated. We reserve the 
                right to change prices at any time. Payment must be made through approved payment 
                methods. We use secure payment gateways to process transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Orders</h2>
              <p>
                All orders are subject to product availability. We reserve the right to refuse or 
                cancel any order for any reason, including but not limited to product availability, 
                errors in pricing, or suspected fraudulent activity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, 
                is the property of Kotton Fruit and is protected by copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Limitation of Liability</h2>
              <p>
                Kotton Fruit shall not be liable for any indirect, incidental, special, or consequential 
                damages arising from your use of this website or purchase of products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Your continued 
                use of the website after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Us</h2>
              <p>For questions about these Terms of Service, please contact us:</p>
              <ul className="list-none space-y-2 ml-4">
                <li><strong>Email:</strong> Contact@kottonfruit.com</li>
                <li><strong>Phone:</strong> +92 321 8900074</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;

