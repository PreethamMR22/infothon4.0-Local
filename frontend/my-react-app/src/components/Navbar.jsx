import { Menu } from "lucide-react";
import "../styles/navbar.css"; // Import external CSS

const Navbar = ({ toggleSidebar }) => {
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
        <button className="nav-button">Profile</button>
        <button className="nav-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
