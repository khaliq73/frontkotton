import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import img11 from '../../assets/img11.jpg';
import img12 from '../../assets/img12.jpg';

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div 
          className="relative overflow-hidden bg-gray-100 aspect-square mb-4 rounded-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src={isHovered ? img12 : img11}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          {product.soldOut && (
            <span className="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 text-xs font-medium rounded">
              Sold Out
            </span>
          )}
        </div>
      </Link>
      
      <div className="space-y-3">
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-sm md:text-base font-semibold text-gray-900 hover:text-gray-600 transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>
        {product.description && (
          <p className="text-xs text-gray-600 line-clamp-2 mb-2">{product.description}</p>
        )}
        {!product.soldOut ? (
          <WhatsAppButton productName={product.name} size="md" />
        ) : (
          <button
            disabled
            className="w-full px-4 py-2 bg-gray-300 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed"
          >
            Sold Out
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;

