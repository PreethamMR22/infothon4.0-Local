import { Menu } from "lucide-react";
import "../styles/navbar.css"; // Import external CSS

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleSidebar}>
        <Menu size={28} />
      </button>
      <div className="middle">
      <h1 className="navbar-title">Agriculture Dashboard</h1>
      <a href="#">Disease Detection</a>
      <a href="#">Info</a>
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
