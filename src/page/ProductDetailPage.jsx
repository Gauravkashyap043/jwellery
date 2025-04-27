// pages/ProductDetailPage.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Sample product data - replace with API call
  useEffect(() => {
    const fetchProduct = async () => {
      // Simulated API call
      const products = [
        {
          id: 1,
          title: "Diamond Solitaire Necklace",
          price: 1899.99,
          category: 'necklaces',
          rating: 4.8,
          images: [
            'https://images.unsplash.com/photo-1589128777073-263566ae5e4d',
            'https://images.unsplash.com/photo-1600721391689-2564bb8055de',
            'https://images.unsplash.com/photo-1588449668365-d15e397f6787'
          ],
          description: "Exquisite 18K white gold necklace featuring a brilliant-cut diamond solitaire.",
          details: {
            material: '18K White Gold',
            stone: 'VS1 Diamond',
            chainLength: '18 inches',
            warranty: '2 Years'
          }
        }
      ];
      setProduct(products.find(p => p.id === Number(id)));
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={`${product.images[selectedImage]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`}
                alt={product.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-rose-500 hover:text-white transition-colors">
                <HeartIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-rose-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={`${img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-playfair font-bold text-gray-900">{product.title}</h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-6 h-6 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.rating} Rating)</span>
            </div>

            <p className="text-3xl font-bold text-rose-500">
              ${product.price.toLocaleString()}
            </p>

            <p className="text-gray-600">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-gray-900">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <ShoppingBagIcon className="w-6 h-6" />
              Add to Cart
            </button>

            {/* Product Specifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Material:</span> {product.details.material}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Stone:</span> {product.details.stone}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Chain Length:</span> {product.details.chainLength}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Warranty:</span> {product.details.warranty}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;