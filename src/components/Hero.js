import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import { FaRobot, FaSearch, FaFileAlt, FaEnvelope, FaCheck } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Reverse Recruiter</h1>
        <h2>Automation Tool</h2>
        <p>AUTOMATING JOB APPLICATIONS BASED ON RESUME DATA</p>
        
        <div className="hero-features">
          <div className="feature">
            <FaRobot className="feature-icon" />
            <span>Automated Job Search</span>
          </div>
          <div className="feature">
            <FaFileAlt className="feature-icon" />
            <span>Resume Tailoring</span>
          </div>
          <div className="feature">
            <FaEnvelope className="feature-icon" />
            <span>Gmail Integration</span>
          </div>
          <div className="feature">
            <FaCheck className="feature-icon" />
            <span>Application Tracking</span>
          </div>
        </div>

        <Link to="/signin" className="cta-button">
          Get Started
          <span className="button-icon">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero; 