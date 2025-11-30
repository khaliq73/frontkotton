import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/ui/HeroSlider';
import ProductCard from '../components/ui/ProductCard';
import VideoGallery from '../components/ui/VideoGallery';
import InstagramFeed from '../components/ui/InstagramFeed';
import Button from '../components/common/Button';
import { Truck, RefreshCw, Star, CreditCard } from 'lucide-react';
import { products } from '../data/products';
import videoGif from '../assets/gif video.gif';

const Home = () => {
  const newArrivals = products.filter((p) => p.category === 'new-arrivals').slice(0, 8);
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 8);

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Free Shipping',
      description: 'Free Shipping for orders over 4000',
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: '7 Days Exchange',
      description: 'Within 7 days for an exchange',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '4.5 Google Rating',
      description: 'Committed to sale top-notch quality products',
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Flexible Payment',
      description: 'Pay with either Debit/Credit Cards, Bank Transfer or COD',
    },
  ];


  return (
    <div className="pt-[33px]">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Video GIF Section */}
      <section className="w-full">
        <img
          src={videoGif}
          alt="Kotton Fruit"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* NEW IN Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">NEW IN</h2>
            <Link to="/collection/new-arrivals" className="text-sm font-medium hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">BEST SELLERS</h2>
            <Link to="/products" className="text-sm font-medium hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products">
              <Button variant="outline" size="lg">
                Shop All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-black">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kotton Fruit – Streetwear Clothing Store for Everyone
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Kotton Fruit, we create streetwear clothing that's simple, versatile, and made for every day. As a streetwear clothing brand built on comfort and individuality, our goal is to bring you pieces that feel good, look better, and fit seamlessly into your lifestyle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
              Searching for a casual clothing brand that gets it? You've found it.
            </p>
            <h3 className="text-2xl font-bold mt-8 mb-4">
              Your Go-To Streetwear Clothing Brand in Pakistan
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our goal is simple: create a casual clothing brand that works for everyone. Each piece blends premium fabrics with minimalist design, giving you timeless staples for work, weekends, and everything in between.
            </p>
            <h3 className="text-2xl font-bold mt-8 mb-4">
              Casual Clothing, No Complications
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We keep it real — a casual clothing brand in Pakistan that's made for how you actually live. Think oversized fits, clean designs, and fabrics that feel as good as they look. For an online streetwear clothing stores in Pakistan that fits your daily flow, Kotton Fruit has what you need
            </p>
            <h3 className="text-2xl font-bold mt-8 mb-4">
              Why Choose Kotton Fruit?
            </h3>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Gender-Neutral Streetwear</strong> – Comfortable oversized fits for every body.</li>
              <li><strong>Affordable Quality</strong> – Premium materials without the premium price tag.</li>
              <li><strong>Urban Streetwear Clothing Store</strong> – Stylish, fresh designs made for the modern urban lifestyle.</li>
              <li><strong>Effortless Shopping</strong> – A trusted streetwear clothing store in Pakistan with a seamless online experience.</li>
            </ul>
            <h3 className="text-2xl font-bold mt-8 mb-4">
              Join the Kotton Fruit Movement
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We're more than a casual clothing brand—we're a community. Our pieces are designed for self-expression, comfort, and a modern urban lifestyle. Explore our latest collections and discover why Kotton Fruit is fast becoming one of the best clothing stores for streetwear in Pakistan.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
              <strong>Kotton Fruit – redefining streetwear, one outfit at a time.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />
    </div>
  );
};

export default Home;
