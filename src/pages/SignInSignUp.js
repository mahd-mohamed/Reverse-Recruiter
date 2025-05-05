import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignInSignUp.css';

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const navigate = useNavigate();

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
    // Simulate successful sign in/up and redirect
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
          <p>
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <button 
              className="toggle-form" 
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
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
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          {!isSignIn && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button type="submit" className="submit-button">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-footer">
          <Link to="/" className="back-home">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp; 