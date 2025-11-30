import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import desktopBanner from '../../assets/banner (2).jpg';
import mobileBanner from '../../assets/mobile banner.jpg';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: 'TIMELESS IS LIVE NOW',
      subtitle: 'Shop Now',
      description: 'Discover our latest TIMELESS collection featuring premium streetwear essentials.',
      link: '/collection/timeless',
    },
    {
      id: 2,
      title: 'PRICE DROP ON ENTIRE STOCK',
      subtitle: 'ONLY FOR 2 DAYS!',
      description: 'Limited time offer - Get amazing discounts on all products.',
      link: '/products',
    },
    {
      id: 3,
      title: 'NEW ARRIVALS',
      subtitle: 'Latest Collection',
      description: 'Check out our newest streetwear pieces designed for modern lifestyle.',
      link: '/collection/new-arrivals',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img
              src={desktopBanner}
              alt={slides[currentIndex].title}
              className="hidden md:block w-full h-full object-cover"
            />
            <img
              src={mobileBanner}
              alt={slides[currentIndex].title}
              className="md:hidden w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm md:text-base font-medium mb-2 uppercase tracking-wider"
                >
                  {slides[currentIndex].subtitle}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                >
                  {slides[currentIndex].title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                >
                  {slides[currentIndex].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link to={slides[currentIndex].link}>
                    <Button variant="primary" size="lg">
                      Explore Collection
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

