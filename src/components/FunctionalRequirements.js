import React from 'react';
import '../styles/FunctionalRequirements.css';
import { FaRobot, FaSearch, FaFileAlt, FaEnvelope, FaCheck, FaCode, FaDatabase, FaShieldAlt } from 'react-icons/fa';

const FunctionalRequirements = () => {
  const requirements = [
    {
      icon: <FaRobot />,
      title: 'Automated Job Search',
      items: [
        'Web scraping of job listings',
        'Keyword-based job matching',
        'Location-based filtering',
        'Salary range filtering'
      ]
    },
    {
      icon: <FaFileAlt />,
      title: 'Resume Management',
      items: [
        'Resume parsing and analysis',
        'Automated resume tailoring',
        'Cover letter generation',
        'Multiple resume versions'
      ]
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Integration',
      items: [
        'Gmail API integration',
        'Automated email tracking',
        'Response management',
        'Interview scheduling'
      ]
    },
    {
      icon: <FaCheck />,
      title: 'Application Tracking',
      items: [
        'Application status tracking',
        'Interview preparation',
        'Follow-up reminders',
        'Analytics dashboard'
      ]
    },
    {
      icon: <FaCode />,
      title: 'Technical Features',
      items: [
        'Python-based backend',
        'React frontend',
        'RESTful API',
        'Database integration'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security',
      items: [
        'Data encryption',
        'Secure authentication',
        'Privacy controls',
        'Compliance with data protection laws'
      ]
    }
  ];

  return (
    <section className="functional-requirements" id="functional-requirements">
      <div className="container">
        <h2 className="section-title">Functional Requirements</h2>
        
        <div className="requirements-grid">
          {requirements.map((requirement, index) => (
            <div key={index} className="requirement-card">
              <div className="requirement-icon">
                {requirement.icon}
              </div>
              <h3>{requirement.title}</h3>
              <ul>
                {requirement.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalRequirements; 