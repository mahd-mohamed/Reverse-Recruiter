import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Form from '../components/Form';
import Footer from '../components/Footer';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default Landing; 