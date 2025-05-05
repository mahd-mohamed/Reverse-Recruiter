import React, { useState } from 'react';
import '../styles/Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="form-section" id="contact">
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <FontAwesomeIcon icon={faComment} className="input-icon" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
            />
          </div>
          <button type="submit" className="submit-button">
            Send Message
            <FontAwesomeIcon icon={faPaperPlane} className="button-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form; 