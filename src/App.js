import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Landing.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import FunctionalRequirements from './components/FunctionalRequirements';
import KeyFeatures from './components/KeyFeatures';
import Footer from './components/Footer';
import SignInSignUp from './pages/SignInSignUp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="landing-page">
            <Navbar />
            <main>
              <Hero />
              <Introduction />
              <FunctionalRequirements />
              <KeyFeatures />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/signin" element={<SignInSignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
