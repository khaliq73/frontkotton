import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const CollectionPage = () => {
  const { slug } = useParams();
  
  // Collection name mapping
  const collectionNames = {
    'new-arrivals': { name: 'New Arrivals', description: 'Latest streetwear collections' },
    'best-sellers': { name: 'Best Sellers', description: 'Our best selling products' },
    'buy-1-get-1-free': { name: 'Buy 1 Get 1 Free', description: 'Special offer products' },
    'timeless': { name: 'Timeless Collection', description: 'Classic designs that never go out of style' },
    'legacy-lane': { name: 'Legacy Lane Collection', description: 'Vintage inspired streetwear' },
    'beyond-the-streets': { name: 'Beyond The Streets', description: 'Urban streetwear collection' },
    'game-changer': { name: 'Game Changer Collection', description: 'Innovative designs' },
    'tops': { name: 'Tops', description: 'Premium tops collection' },
    'hoodies-sweatshirts': { name: 'Hoodies & Sweatshirts', description: 'Comfortable hoodies and sweatshirts' },
    'hoodies': { name: 'Hoodies', description: 'Premium hoodies' },
    'sweatshirts': { name: 'Sweatshirts', description: 'Premium sweatshirts' },
    'varsity-jackets': { name: 'Varsity Jackets', description: 'Classic varsity style jackets' },
    'co-ord-set': { name: 'Co-Ord Sets', description: 'Matching sets' },
    't-shirts': { name: 'T-Shirts', description: 'Classic and modern t-shirts' },
    'oversized-t-shirts': { name: 'Oversized T-Shirts', description: 'Oversized fit t-shirts' },
    'polo-t-shirts': { name: 'Polo T-Shirts', description: 'Classic polo style' },
    'blanks': { name: 'Blanks', description: 'Plain t-shirts for custom printing' },
    'oversized-shirts': { name: 'Oversized Shirts', description: 'Oversized shirt collection' },
    'tanks': { name: 'Tanks', description: 'Tank tops collection' },
    'bottoms': { name: 'Bottoms', description: 'Premium bottoms collection' },
    'shorts': { name: 'Shorts', description: 'Comfortable shorts' },
    'boxer-shorts': { name: 'Boxer Shorts', description: 'Premium boxer shorts' },
    'pajamas': { name: 'Pajamas', description: 'Comfortable pajamas' },
    'kotn-basics': { name: 'Kotn Basics', description: 'Essential basics collection' },
  };

  const collection = collectionNames[slug] || { name: slug, description: '' };
  
  const [availabilityFilter, setAvailabilityFilter] = useState({
    inStock: true,
    outOfStock: false,
  });
  const [sortBy, setSortBy] = useState('featured');
  const [openSections, setOpenSections] = useState({
    availability: true,
  });

  // Filter products by collection (category matches slug)
  // For best-sellers, filter by bestSeller flag
  let collectionProducts = slug === 'best-sellers' 
    ? products.filter((p) => p.bestSeller)
    : products.filter((p) => p.category === slug);

  // Apply filters
  if (!availabilityFilter.outOfStock) {
    collectionProducts = collectionProducts.filter((p) => !p.soldOut);
  }

  // Apply sorting
  const sortedProducts = [...collectionProducts].sort((a, b) => {
    if (sortBy === 'featured') {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
    if (sortBy === 'best-selling') {
      return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
    }
    if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  const inStockCount = collectionProducts.filter((p) => !p.soldOut).length;
  const outOfStockCount = collectionProducts.filter((p) => p.soldOut).length;

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="pt-[113px] min-h-screen bg-white">
      {/* Collection Hero */}
      <div className="relative h-64 md:h-96 overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{collection.name}</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">{collection.description}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-[133px] bg-white rounded-lg border border-gray-200 p-4 lg:p-6 shadow-sm">
              <h2 className="text-lg lg:text-xl font-bold mb-6 text-gray-900">Filters</h2>

              {/* Availability Filter */}
              <div className="mb-6 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <button
                  onClick={() => toggleSection('availability')}
                  className="w-full flex items-center justify-between mb-4 font-semibold text-gray-900 hover:text-black transition-colors"
                >
                  <span>Availability</span>
                  {openSections.availability ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {openSections.availability && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={availabilityFilter.inStock}
                        onChange={(e) =>
                          setAvailabilityFilter({
                            ...availabilityFilter,
                            inStock: e.target.checked,
                          })
                        }
                        className="w-4 h-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-black cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                        In stock ({inStockCount})
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={availabilityFilter.outOfStock}
                        onChange={(e) =>
                          setAvailabilityFilter({
                            ...availabilityFilter,
                            outOfStock: e.target.checked,
                          })
                        }
                        className="w-4 h-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-black cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                        Out of stock ({outOfStockCount})
                      </span>
                    </label>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Products */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">{sortedProducts.length}</span> product{sortedProducts.length !== 1 ? 's' : ''}
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white text-sm font-medium text-gray-900 hover:border-gray-400 transition-colors cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="best-selling">Best selling</option>
                <option value="name-asc">Alphabetically, A-Z</option>
                <option value="name-desc">Alphabetically, Z-A</option>
              </select>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
                {sortedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <p className="text-gray-500 text-lg">No products available in this collection yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Bottom padding */}
      <div className="pb-12 md:pb-16"></div>
    </div>
  );
};

export default CollectionPage;

