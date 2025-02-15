import React from "react";
import "../styles/home.css";
import { Leaf, CloudRain, Users, MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bring Growth, Fresh Agriculture</h1>
          <p>
            Monotonically revolutionize niche markets for cross-media. 
            Continually enhance diverse services before efficiency.
          </p>
          <button className="cta-button">Discover More</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>We Provide More Fresh Agro Products</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Leaf className="icon green" />
            <h3>Fresh Vegetables</h3>
            <p>Organically grown, farm-fresh vegetables.</p>
          </div>
          <div className="feature-card">
            <CloudRain className="icon blue" />
            <h3>Agriculture Products</h3>
            <p>High-quality grains and farm produce.</p>
          </div>
          <div className="feature-card">
            <Users className="icon yellow" />
            <h3>Fresh Fruits</h3>
            <p>Nutrient-rich, handpicked fresh fruits.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-card">
          <MessageCircle className="icon orange" />
          <p>"Best agro services ever! The quality is unmatched."</p>
          <h4>Rahul Thakkar</h4>
        </div>
      </div>

      {/* Team Section */}
      <div className="team">
        <h2>Meet Our Experts</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="../assets/member1.jpg" alt="team" />
            <h4>Timothy Harper</h4>
            <p>Agriculture Specialist</p>
          </div>
          <div className="team-member">
            <img src="../assets/member2.jpg" alt="team" />
            <h4>Sarah James</h4>
            <p>Crop Scientist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
