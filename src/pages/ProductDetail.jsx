import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ProductGallery from '../components/ui/ProductGallery';
import SizeChart from '../components/ui/SizeChart';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="pt-[113px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Product specifications
  const productSpecs = {
    fit: product.fit || 'Oversized',
    fabric: product.fabric || 'Cotton Fleece',
    print: product.print || 'DTF - Direct To Film',
    unisex: product.unisex !== undefined ? product.unisex : true,
    modelHeight: product.modelHeight || "6'3",
    modelSize: product.modelSize || 'L',
  };

  return (
    <div className="pt-[113px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12">

        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-6 md:mb-8 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        {/* Main Product Grid - Mobile: Image first, then info | Desktop: Side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">

          {/* Product Gallery - Mobile pe top mein, Desktop pe sticky left side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start order-1 lg:order-none -mb-8 lg:mb-0"
          >
            <ProductGallery images={product.images} productName={product.name} />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 order-2"
          >
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {product.description}
              </p>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-4">
              <WhatsAppButton productName={product.name} size="lg" />
            </div>
          </motion.div>
        </div>

        {/* Size Chart Section */}
        <div className="mb-12 md:mb-16 border-t border-gray-200 pt-8 md:pt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Size Guide</h2>
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <SizeChart />
          </div>
        </div>

        {/* Product Information Section */}
        <div className="mb-12 md:mb-16 border-t border-gray-200 pt-8 md:pt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Product Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Specifications */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-3">Product Specifications</h3>
              <dl className="space-y-4 text-sm md:text-base">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <dt className="font-medium text-gray-600">Fit</dt>
                  <dd className="font-semibold text-gray-900">{productSpecs.fit}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <dt className="font-medium text-gray-600">Fabric</dt>
                  <dd className="font-semibold text-gray-900">{productSpecs.fabric}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <dt className="font-medium text-gray-600">Print</dt>
                  <dd className="font-semibold text-gray-900">{productSpecs.print}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <dt className="font-medium text-gray-600">Unisex</dt>
                  <dd className="font-semibold text-gray-900">{productSpecs.unisex ? 'Yes' : 'No'}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <dt className="font-medium text-gray-600">Model Height</dt>
                  <dd className="font-semibold text-gray-900">{productSpecs.modelHeight}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="font-medium text-gray-600">Model Wearing</dt>
                  <dd className="font-semibold text-gray-900">Size {productSpecs.modelSize}</dd>
                </div>
              </dl>
            </div>

            {/* Care Instructions */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-3">Product Care</h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-3"><span className="mt-1">•</span> Avoid bleach</li>
                <li className="flex items-start gap-3"><span className="mt-1">•</span> Do not iron directly over print</li>
                <li className="flex items-start gap-3"><span className="mt-1">•</span> Dry cleaning not recommended</li>
                <li className="flex items-start gap-3"><span className="mt-1">•</span> Do not tumble dry</li>
              </ul>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <h3 className="font-semibold text-gray-900 mb-3">Please Note</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1">•</span> Colors may slightly vary depending on screen brightness</li>
              <li className="flex items-start gap-3"><span className="mt-1">•</span> Actual product may vary ±5% in measurements</li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;