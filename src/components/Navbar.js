import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'introduction', 'functional-requirements', 'key-features', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home" onClick={() => handleNavClick('home')}>Reverse Recruiter</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              onClick={() => handleNavClick('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#introduction" 
              onClick={() => handleNavClick('introduction')}
              className={activeSection === 'introduction' ? 'active' : ''}
            >
              Introduction
            </a>
          </li>
          <li>
            <a 
              href="#functional-requirements" 
              onClick={() => handleNavClick('functional-requirements')}
              className={activeSection === 'functional-requirements' ? 'active' : ''}
            >
              Features
            </a>
          </li>
          <li>
            <a 
              href="#key-features" 
              onClick={() => handleNavClick('key-features')}
              className={activeSection === 'key-features' ? 'active' : ''}
            >
              How It Works
            </a>
          </li>
          <li>
            <a 
              href="#footer" 
              onClick={() => handleNavClick('footer')}
              className={activeSection === 'footer' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 