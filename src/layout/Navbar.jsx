import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const categories = [
    { name: "Necklaces", link: "/necklaces" },
    { name: "Earrings", link: "/earrings" },
    { name: "Rings", link: "/rings" },
    { name: "Bracelets", link: "/bracelets" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scroll ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-rose-500 font-playfair"
          >
            LuxeÉclat
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                className={`flex items-center ${
                  scroll ? "text-gray-600" : "text-white"
                } hover:text-rose-500 px-4 py-2`}
              >
                Categories
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* ... rest of dropdown code ... */}
            </div>
            <Link
              to="/shop"
              className={`${
                scroll ? "text-gray-600" : "text-white"
              } hover:text-rose-500`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`${
                scroll ? "text-gray-600" : "text-white"
              } hover:text-rose-500`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                scroll ? "text-gray-600" : "text-white"
              } hover:text-rose-500`}
            >
              Contact
            </Link>
          </div>

          {/* Cart & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              className={`flex items-center ${
                scroll ? "text-gray-600" : "text-white"
              } hover:text-rose-500 relative`}
            >
              <ShoppingBagIcon className="w-6 h-6" />
              <span
                className={`absolute -top-1 -right-2 ${
                  scroll ? "bg-rose-500" : "bg-white"
                } ${
                  scroll ? "text-white" : "text-rose-500"
                } rounded-full w-5 h-5 text-xs flex items-center justify-center`}
              >
                3
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden ${
                scroll ? "text-gray-600" : "text-white"
              } hover:text-rose-500`}
            >
              {isOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white py-4 space-y-4 border-t mt-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="block px-4 py-2 text-gray-700 hover:bg-rose-50 rounded-lg"
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/shop"
              className="block px-4 py-2 text-gray-700 hover:bg-rose-50 rounded-lg"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-rose-50 rounded-lg"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-rose-50 rounded-lg"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
