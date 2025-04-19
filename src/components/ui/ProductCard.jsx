import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-rose-500 hover:text-white transition-colors">
        <HeartIcon className="w-6 h-6" />
      </button>

      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {/* New Badge */}
        {product.tags?.includes("new") && (
          <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            New Arrival
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-amber-400" />
            <span className="ml-2 text-gray-600">{product.rating}</span>
          </div>
          <span className="text-2xl font-bold text-rose-500">
            ${product.price}
          </span>
        </div>
        <button className="w-full mt-4 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
