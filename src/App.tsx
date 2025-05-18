import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./utils/CartContext";
import { FavoriteProvider } from "./utils/FavoriteContext";
import Navbar from "./layout/Navbar";
import BenefitsBar from "./components/ui/BenefitsBar";
import HomePage from "./page/HomePage";
import ProductListing from "./page/ProductListing";
import ProductDetailPage from "./page/ProductDetailPage";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import ThankYou from "./page/ThankYou";
import Login from "./page/Login";
import Register from "./page/Register";
import { AuthProvider } from "./utils/AuthContext";
import { productData } from "./utils/productData"; // Import your product data

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoriteProvider>
          <Router>
            <div className="min-h-screen bg-white">
              <BenefitsBar />
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/shop"
                  element={<ProductListing productData={productData} />}
                />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </Router>
        </FavoriteProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;