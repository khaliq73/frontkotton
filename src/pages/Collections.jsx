import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Collections = () => {
  // Main collections to display
  const mainCollections = [
    {
      slug: 'new-arrivals',
      name: 'New Arrivals',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=600&fit=crop',
    },
    {
      slug: 'best-sellers',
      name: 'Best Sellers',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=600&fit=crop',
    },
    {
      slug: 'timeless',
      name: 'Timeless',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=600&fit=crop',
    },
    {
      slug: 'legacy-lane',
      name: 'Legacy Lane',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=600&fit=crop',
    },
    {
      slug: 'beyond-the-streets',
      name: 'Beyond The Streets',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=600&fit=crop',
    },
    {
      slug: 'game-changer',
      name: 'Game Changer',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=600&fit=crop',
    },
    {
      slug: 'tops',
      name: 'Tops',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop',
    },
    {
      slug: 'bottoms',
      name: 'Bottoms',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=600&fit=crop',
    },
    {
      slug: 'kotn-basics',
      name: 'Kotn Basics',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop',
    },
    {
      slug: 'buy-1-get-1-free',
      name: 'Buy 1 Get 1 Free',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=600&fit=crop',
    },
  ];

  return (
    <div className="pt-[113px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            All Collections
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both feminine and relaxed.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {mainCollections.map((collection, index) => {
            const collectionProducts = collection.slug === 'best-sellers'
              ? products.filter((p) => p.bestSeller)
              : products.filter((p) => p.category === collection.slug);
            
            return (
              <motion.div
                key={collection.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/collection/${collection.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-3">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium text-gray-900 uppercase">
                        {collection.name}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {collectionProducts.length} {collectionProducts.length === 1 ? 'product' : 'products'}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 uppercase">
                      {collection.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
