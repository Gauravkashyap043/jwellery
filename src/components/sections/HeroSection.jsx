import { ChevronRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Jewelry"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-900/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="text-rose-500 font-semibold mb-0 md:mb-4 inline-block mt-16 md:mt-0">
            Since 1995 • Family Crafted
          </span>
          <h1 className="text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Timeless Elegance, Modern Luxury
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover our exclusive collection of handcrafted jewelry where
            traditional craftsmanship meets contemporary design.
          </p>
          <div className="flex gap-4">
            <button className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-all duration-300 flex items-center group">
              Explore Collection
              <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/20 text-white px-8 py-4 rounded-full hover:border-rose-500 hover:bg-rose-500/10 transition-all duration-300">
              Custom Design
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:absolute">
        <div className="w-8 h-14 rounded-3xl border-2 border-white/20 flex justify-center items-start p-1">
          <div className="w-2 h-2 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
