import { Link } from "react-router-dom";
import { X } from "lucide-react";
import "../styles/sidebar.css"; // Importing the CSS file

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`} id='completeSidebar'>
      
      <ul className="sidebar-menu">
        {[
          { to: "/", label: "" },
          { to: "/disease-detection", label: "" },
          { to: "/", label: "" },
          { to: "/disease-detection", label: "" },


          { to: "/", label: "Home" },
          { to: "/disease-detection", label: "Disease Detection" },
          
          { to: "/info", label: "Info" },
          { to: "/reports", label: "Reports" },
          { to: "/weather", label: "Weather" },
          { to: "/market-prices", label: "Market Prices" },
          { to: "/community", label: "Community" },
          { to: "/resources", label: "Resources" },
          { to: "/profile", label: "Profile" },
          { to: "/settings", label: "Settings" },
          { to: "/notifications", label: "Notifications" },
          { to: "/help", label: "Help" },
        ].map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className="sidebar-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
