import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Reverse Recruiter</h3>
          <p>Connecting talent with opportunity</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#functional-requirements">Features</a></li>
            <li><a href="#key-features">How It Works</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              info@reverserecruiter.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              (123) 456-7890
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              123 Business Street, City, Country
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Reverse Recruiter. All rights reserved. Practiced by{' '}
          <a
            href="https://github.com/mahd-mohamed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eng. mahd mohamed
          </a>.
        </p>
      </div>

      <button className="scroll-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer;
