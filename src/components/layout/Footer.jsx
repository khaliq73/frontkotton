import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { label: 'BUY 1, GET 1 FREE', path: '/collection/buy-1-get-1-free' },
    { label: 'NEW IN', path: '/collection/new-arrivals' },
    { label: 'BEST SELLERS', path: '/collection/best-sellers' },
    { label: 'COLLECTIONS', path: '/collections' },
    { label: 'TOPS', path: '/collection/tops' },
    { label: 'BOTTOMS', path: '/collection/bottoms' },
    { label: 'KOTN BASICS', path: '/collection/kotn-basics' },
  ];

  const customerServiceLinks = [
    { label: 'Wholesale/Bulk Purchase', path: '/contact' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Refund Policy', path: '/refund-policy' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Shipping Policy', path: '/shipping-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' },
    { label: 'Order Process', path: '/order-process' },
    { label: 'FAQs', path: '/faqs' },
  ];

  return (
    <footer className="bg-black text-white w-full overflow-x-hidden">
      <div className="w-full max-w-full">
        <div className="container mx-auto px-2 sm:px-4 py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="border-b border-white/10 pb-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Let's get in touch
            </h3>
            <p className="text-gray-400 mb-6">
              Sign up for exclusive updates, new arrivals & insider only discounts
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 w-full sm:w-auto"
              />
              <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap">
                Subscribe now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* SHOP */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase">SHOP</h4>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase">CUSTOMER SERVICE</h4>
            <ul className="space-y-2">
              {customerServiceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase">SOCIAL MEDIA</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a
                  href="tel:+923218900074"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +92 321 8900074
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a
                  href="mailto:Contact@kottonfruit.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact@kottonfruit.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/kottonfruit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/kottonfruit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © KOTN {currentYear}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Payment options:</span>
                <div className="flex gap-2">
                  <span className="text-xs text-gray-500">Visa</span>
                  <span className="text-xs text-gray-500">Mastercard</span>
                  <span className="text-xs text-gray-500">COD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
