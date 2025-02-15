import { useState, useRef, useEffect } from "react";
import { Menu, User, X } from "lucide-react";
import "../styles/navbar.css";

const Navbar = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleSidebar}>
        <Menu size={28} />
      </button>
      <div className="middle">
        <h1 className="navbar-title">Resellient Roots AI</h1>
        <a href="/">Home</a>
        <a href="/disease-detection">Predict</a>
        <a href="#">FAQs</a>
      </div>
      <div className="navbar-links">
        <button className="nav-button" onClick={() => setIsProfileOpen(!isProfileOpen)}>
        <i class="fa-solid fa-user-shield" style={{fontSize:"1.5rem"}}></i>
        </button>
        <button className="nav-button">Logout</button>
      </div>

      {isProfileOpen && (
        <div className="profile-popup" ref={profileRef}>
          <button className="close-button" onClick={() => setIsProfileOpen(false)}>
            <X size={20} />
          </button>
          <div className="profile-info">
            <User size={40} />
            <p className="username">UserName</p>
          </div>
          <div className="profile-links">
            <a href="/dashboard">User Dashboard</a>
            <a href="/reports">My Reports</a>
            <button className="logout-button">Logout</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
