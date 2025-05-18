import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../utils/CartContext";
import { useAuth } from '../utils/AuthContext';
import UserAvatar from '../components/ui/UserAvatar';

interface Category {
  name: string;
  link: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  const categories: Category[] = [
    { name: "Necklaces", link: "/necklaces" },
    { name: "Earrings", link: "/earrings" },
    { name: "Rings", link: "/rings" },
    { name: "Bracelets", link: "/bracelets" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isHomePage && !isScrolled
        ? 'bg-transparent'
        : 'bg-white shadow-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className={`text-2xl font-bold ${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'}`}>
              Affordable Jewelry
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
                } hover:text-rose-500 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
                } hover:text-rose-500 transition-colors`}
            >
              Shop
            </Link>
            <Link
              to="/favorites"
              className={`${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
                } hover:text-rose-500 transition-colors`}
            >
              Favorites
            </Link>
            {user ? (
              <UserAvatar />
            ) : (
              <Link
                to="/login"
                className={`${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
                  } hover:text-rose-500 transition-colors`}
              >
                Login
              </Link>
            )}
            <Link
              to="/cart"
              className={`relative ${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
                } hover:text-rose-500 transition-colors`}
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/cart"
              className={`relative ${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
                } hover:text-rose-500 transition-colors`}
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
                } hover:text-rose-500 transition-colors`}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-900 hover:text-rose-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-gray-900 hover:text-rose-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/favorites"
              className="block px-3 py-2 text-gray-900 hover:text-rose-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Favorites
            </Link>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-gray-900 hover:text-rose-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Your Profile
                </Link>
                <Link
                  to="/orders"
                  className="block px-3 py-2 text-gray-900 hover:text-rose-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Your Orders
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-900 hover:text-rose-500 transition-colors"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-900 hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;