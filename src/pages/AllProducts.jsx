import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import SectionTitle from '../components/common/SectionTitle';
import { products } from '../data/products';

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [availabilityFilter, setAvailabilityFilter] = useState({
    inStock: true,
    outOfStock: false,
  });
  const [openSections, setOpenSections] = useState({
    availability: true,
  });

  let filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Apply availability filter
  if (!availabilityFilter.outOfStock) {
    filteredProducts = filteredProducts.filter((p) => !p.soldOut);
  }

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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

  const inStockCount = filteredProducts.filter((p) => !p.soldOut).length;
  const outOfStockCount = filteredProducts.filter((p) => p.soldOut).length;

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="pt-[113px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 md:py-12">
        <SectionTitle title="All Products" subtitle="Wholesale Collection" />

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-[133px]">
              <h2 className="text-xl font-bold mb-6">Filters</h2>

              {/* Availability Filter */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <button
                  onClick={() => toggleSection('availability')}
                  className="w-full flex items-center justify-between mb-4 font-semibold"
                >
                  <span>Availability</span>
                  {openSections.availability ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openSections.availability && (
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={availabilityFilter.inStock}
                        onChange={(e) =>
                          setAvailabilityFilter({
                            ...availabilityFilter,
                            inStock: e.target.checked,
                          })
                        }
                        className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">
                        In stock ({inStockCount})
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={availabilityFilter.outOfStock}
                        onChange={(e) =>
                          setAvailabilityFilter({
                            ...availabilityFilter,
                            outOfStock: e.target.checked,
                          })
                        }
                        className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">
                        Out of stock ({outOfStockCount})
                      </span>
                    </label>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Right Side - Products */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white"
              >
                <option value="featured">Featured</option>
                <option value="best-selling">Best selling</option>
                <option value="name-asc">Alphabetically, A-Z</option>
                <option value="name-desc">Alphabetically, Z-A</option>
              </select>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
              >
                {sortedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}

            {/* Results Count */}
            <div className="mt-8 text-center text-gray-600">
              Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom padding */}
      <div className="pb-12 md:pb-16"></div>
    </div>
  );
};

export default AllProducts;
