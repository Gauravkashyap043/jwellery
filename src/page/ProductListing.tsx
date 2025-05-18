import { useState } from 'react';
import { ChevronDownIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Product } from '../types/product';
import ProductCard from '../components/ui/ProductCard';
import { useCart } from '../utils/CartContext';

interface ProductListingProps {
  productData: Product[];
}

const ProductListing = ({ productData }: ProductListingProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('price-asc');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const { totalItems, totalPrice } = useCart();

  // Filter, search, sort and paginate products
  const filteredProducts = productData
    .filter(product =>
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categories = ['all', 'necklaces', 'earrings', 'rings', 'bracelets'] as const;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 py-12">
        {/* Controls Section */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Search jewelry..."
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full capitalize ${selectedCategory === category
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="appearance-none pl-4 pr-8 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDownIcon className="w-4 h-4 absolute right-3 top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product Count */}
        <div className="mb-6 text-gray-600">
          Showing {paginatedProducts.length} of {filteredProducts.length} items
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Sticky Bottom Cart Preview */}
        {totalItems > 0 && (
          <div className="fixed bottom-4 right-4 bg-rose-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <ShoppingBagIcon className="w-6 h-6" />
            <span>{totalItems} Items</span>
            <span className="ml-2">₹{totalPrice.toFixed(2)}</span>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg ${currentPage === i + 1
                  ? 'bg-rose-500 text-white'
                  : 'border border-gray-200 hover:bg-gray-100'
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;