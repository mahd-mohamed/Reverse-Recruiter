import React from 'react';
import '../styles/Introduction.css';
import { FaExclamationCircle, FaLightbulb } from 'react-icons/fa';

const Introduction = () => {
  return (
    <section className="introduction" id="introduction">
      <div className="container">
        <h2 className="section-title">Introduction</h2>
        
        <div className="problem-solution-container">
          <div className="problem-section">
            <div className="section-header">
              <FaExclamationCircle className="section-icon" />
              <h3>Problem Statement</h3>
            </div>
            <p>Job searching is time-consuming and requires repeated resume tailoring and form filling.</p>
          </div>

          <div className="solution-section">
            <div className="section-header">
              <FaLightbulb className="section-icon" />
              <h3>Solution</h3>
            </div>
            <p>Automates job searches, tailors resumes, and assists in job applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 