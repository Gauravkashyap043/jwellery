import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
// import HomePage from './components/HomePage';
import HomePage from "./page/HomePage";
import BenefitsBar from "./components/ui/BenefitsBar";

function App() {
  return (
    <Router>
      <div className="App">
        <BenefitsBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
