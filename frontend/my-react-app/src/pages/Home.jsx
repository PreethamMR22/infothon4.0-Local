import React, { useRef } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/home.css";
import { Leaf, CloudRain, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const featuresRef = useRef(null);

  const handleScroll = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Predict the disease and find the cure!
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Leaf Disease detection using Deep Learning Model, find the efficient
            fertilizer to cure your disease.
          </motion.p>

          {/* Animated Button */}
          <motion.button
            className="cta-button"
            onClick={handleScroll}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Discover More
          </motion.button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features" ref={featuresRef}>
        <h2>Disease Prediction</h2>
        <div className="features-grid">
          <Link to="/disease-detection" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="feature-card">
              <Leaf className="icon green" />
              <h3>Leaf Disease Detection</h3>
              <p>Deep Learning model is employed to detect the disease.</p>
            </div>
          </Link>
          <Link to="/disease-detection" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="feature-card">
              <CloudRain className="icon blue" />
              <h3>Access Reports from Cloud</h3>
              <p>Get efficient and lab-quality reports within minutes.</p>
            </div>
          </Link>
          <Link to="/disease-detection" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="feature-card">
              <Users className="icon yellow" />
              <h3>Fertilizer Recommendation</h3>
              <p>Get fertilizer recommendations using an AI model.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>Customer Reviews & Satisfaction</h2>
        <div className="testimonial-card">
          <MessageCircle className="icon orange" />
          <p>
            "We strive to provide the best service through Disease Prediction,
            Report Generation, and Fertilizer Recommendation... Drop Your
            Suggestion here!"
          </p>
          <button className="review-button" style={{ padding: "10px" }}>
            Write a Review
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="outerfooter">
      <div className="team">
        <h2>Meet Our Teammates</h2>
        <div className="team-grid">
          <div className="team-member">
          <i class="fa-solid fa-user"></i>
            <h4>Preetham M R</h4>
            <p>Web Developer</p>
          </div>
          <div className="team-member">
          <i class="fa-solid fa-user"></i>
            <h4>Shripad G Maradi</h4>
            <p>AIML Developer</p>
          </div>
          <div className="team-member">
          <i class="fa-solid fa-user"></i>
            <h4>Rohan R Gowda</h4>
            <p>AIML Developer</p>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="contactus">
          <span> <b>Contact Us </b></span>
          <span>preethammr.is23@rvce.edu.in</span>
        <span>shripadgmaradi.cd23@rvce.edu.in</span>
        <span>rohanrgowda.is23@rvce.edu.in</span>

        </div>
        <div className="contactmiddle">
              <span>Code warriors</span>
                </div>
        <div className="contactend">
          <span> <b>Contact No.</b></span>
         <span>7899802208</span>
         <span>7483075132</span>
          <span>8431792442</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
