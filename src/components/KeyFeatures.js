import React from 'react';
import '../styles/KeyFeatures.css';
import { FaCode, FaRobot, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const KeyFeatures = () => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Resume Parsing',
      description: 'Extracts key details using PyMuPDF, python-docx, and spaCy'
    },
    {
      icon: <FaRobot />,
      title: 'Web Scraping',
      description: 'Uses Selenium and BeautifulSoup to extract job details'
    },
    {
      icon: <FaFileAlt />,
      title: 'Tailored Resume & Cover Letter',
      description: 'Customizes the resume and cover letter based on job requirements'
    },
    {
      icon: <FaEnvelope />,
      title: 'Gmail Integration',
      description: 'Uses Google OAuth and Gmail API to automate email tracking'
    }
  ];

  return (
    <section className="key-features" id="key-features">
      <div className="container">
        <h2 className="section-title">Key Features & How It Works</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures; 