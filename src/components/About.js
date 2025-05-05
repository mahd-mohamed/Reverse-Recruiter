import React from 'react';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHandshake, faChartLine } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Reverse Recruiter is a revolutionary platform that connects talented professionals
          with their dream companies. We believe in making the job search process more
          efficient and rewarding for everyone involved.
        </p>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faBrain} />
            </div>
            <h3>Smart Matching</h3>
            <p>Our advanced algorithm matches you with the perfect opportunities</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3>Direct Access</h3>
            <p>Connect directly with hiring managers and decision makers</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Career Growth</h3>
            <p>Find opportunities that align with your long-term career goals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 