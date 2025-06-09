import React from 'react';
import hero from '../assets/hero.jpg'; // Replace with your image name
import { Link } from 'react-router-dom';
import './Hero.css';


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        {/* LEFT: Text Content */}
        <div className="hero-left">
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
            <Link to="/contact" className="btn btn-blue">
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="hero-right">
          <img src={hero} alt="Printing Machine Service" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
