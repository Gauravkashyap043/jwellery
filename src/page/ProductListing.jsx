import { useState } from 'react';
import { StarIcon, HeartIcon, ShoppingBagIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price-asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sample products data
  const products = [
    { id: 1, title: "Diamond Solitaire Necklace", price: 1899.99, category: 'necklaces', rating: 4.8 },
    { id: 2, title: "Vintage Pearl Earrings", price: 799.99, category: 'earrings', rating: 4.5 },
    { id: 3, title: "Platinum Wedding Band", price: 2499.99, category: 'rings', rating: 4.9 },
    // Add more products...
  ];

  // Filter, search, sort and paginate products
  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if(sortBy === 'price-asc') return a.price - b.price;
      if(sortBy === 'price-desc') return b.price - a.price;
      if(sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
              {['all', 'necklaces', 'earrings', 'rings', 'bracelets'].map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full capitalize ${
                    selectedCategory === category
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
                onChange={(e) => setSortBy(e.target.value)}
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
         {/* Product Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <img
                  src={`${product.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Product Badges */}
                {product.tags?.includes('new') && (
                  <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    New Arrival
                  </div>
                )}
                
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-rose-500 hover:text-white transition-colors">
                  <HeartIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-sm">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Price */}
                  <span className="text-2xl font-bold text-rose-500">
                    ${product.price.toLocaleString()}
                  </span>
                </div>

                {/* Add to Cart */}
                <button className="w-full mt-4 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <ShoppingBagIcon className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Bottom Cart Preview */}
        <div className="fixed bottom-4 right-4 bg-rose-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
          <ShoppingBagIcon className="w-6 h-6" />
          <span>3 Items</span>
          <span className="ml-2">$5,299.97</span>
        </div>
      </div>
    {/* Pagination */}
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
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
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
      </div>
  );
};

export default ProductListing;