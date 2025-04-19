import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">LuxeÉclat</h3>
            <p className="text-gray-400 mb-4">
              Crafting timeless elegance through exquisite jewelry design since
              1995. Experience luxury redefined.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d={`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-rose-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-rose-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-rose-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-rose-500 transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  to="/returns"
                  className="hover:text-rose-500 transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/warranty"
                  className="hover:text-rose-500 transition-colors"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-rose-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-rose-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 mt-1 mr-3 text-rose-500" />
                <p>
                  123 Luxury Avenue
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-rose-500" />
                <a href="tel:+11234567890" className="hover:text-rose-500">
                  +1 (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-3 text-rose-500" />
                <a
                  href="mailto:info@luxe-eclat.com"
                  className="hover:text-rose-500"
                >
                  info@luxe-eclat.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2023 LuxeÉclat. All rights reserved. Crafted with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
