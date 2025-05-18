import { useEffect, useState } from "react";
import { productData } from "../utils/productData"
import { Product } from "../types/product"
import Footer from "../layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ProductCard from "../components/ui/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fake API call

    setProducts(productData);
  }, []);

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />

        {/* Featured Collections */}
        <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-playfair font-bold text-center mb-16">
              Signature Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Wedding",
                  image: "https://images.pexels.com/photos/618701/pexels-photo-618701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                },
                {
                  name: "Everyday",
                  image: "https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                },
                {
                  name: "Luxury",
                  image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                },
              ].map((collection: { name: string; image: string }) => (
                <div
                  key={collection.name}
                  className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={collection.image}
                    alt={`${collection.name} Collection`}
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-4xl font-playfair font-bold text-white tracking-wide">
                      {collection.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-playfair font-bold">
                Our Curated Selection
              </h2>
              <button className="flex items-center text-rose-500 hover:text-rose-600 font-semibold">
                View All
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Promotion Banner */}
        <section className="relative py-24 bg-gray-900 text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl font-playfair font-bold mb-6">
              Eternal Brilliance Collection
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover our limited edition diamond series crafted for timeless
              elegance
            </p>
            <button className="bg-rose-500 hover:bg-rose-600 px-12 py-4 rounded-full text-lg font-semibold transition-colors">
              Explore Now
            </button>
          </div>
        </section>

        {/* <NewsletterSection /> */}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
