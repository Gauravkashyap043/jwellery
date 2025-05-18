import React from 'react';
import { StarIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { useCart } from '../../utils/CartContext';
import { useFavorites } from '../../utils/FavoriteContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      image: product.images[0],
    });
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-t-2xl">
          <img
            src={product.images[0]}
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

          <button
            className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-colors ${
              isFavorite(product.id)
                ? 'bg-rose-500 text-white'
                : 'bg-white/80 hover:bg-rose-500 hover:text-white'
            }`}
            onClick={handleWishlistClick}
          >
            <HeartIcon className="w-6 h-6" />
          </button>
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-6">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-rose-500 transition-colors">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600 text-sm">({product.rating})</span>
          </div>

          {/* Price */}
          <span className="text-2xl font-bold text-rose-500">
            ₹{product.price.toLocaleString()}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          className="w-full mt-4 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          onClick={handleAddToCart}
        >
          <ShoppingBagIcon className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
