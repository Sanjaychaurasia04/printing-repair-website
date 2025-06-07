import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Expert Heidelberg & Printing Machine Repairs in India
          </h1>
          <p className="hero-description">
            Professional, reliable, and fast repair services for all major printing press brands. 
            We keep your machines running at peak performance.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-orange">
              Our Services
            </Link>
            <a href="#appointment" className="btn btn-blue">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
