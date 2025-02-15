import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DiseaseDetection from "./pages/DiseaseDetection";
import SeverityAnalysis from "./pages/SeverityAnalysis";
import Info from "./pages/Info";
import Reports from "./pages/Reports";
import Weather from "./pages/Weather";
import MarketPrices from "./pages/MarketPrices";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Help from "./pages/Help";
import './styles/navbar.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="mainBody">

     
      <div className="flex h-screen bg-green-100">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="p-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/disease-detection" element={<DiseaseDetection />} />
              <Route path="/severity-analysis" element={<SeverityAnalysis />} />
              <Route path="/info" element={<Info />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/market-prices" element={<MarketPrices />} />
              <Route path="/community" element={<Community />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
