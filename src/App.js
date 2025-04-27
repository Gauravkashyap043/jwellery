import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
// import HomePage from './components/HomePage';
import HomePage from "./page/HomePage";
import BenefitsBar from "./components/ui/BenefitsBar";
import ProductListing from "./page/ProductListing";
import ProductDetailPage from "./page/ProductDetailPage";

function App() {
  return (
    <Router>
      <div className="App">
        <BenefitsBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          {/* Add other routes later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
