import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-blue">PrintPro</span>
          <span className="logo-orange">Repairs</span>
        </Link>

        <nav className="nav-desktop">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <div className="phone-contact">
            <FaPhone className="phone-icon" />
            <a href="tel:+919310109620" className="phone-number">+91 93101 09620</a>
          </div>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="nav-mobile">
          <ul className="mobile-nav-list">
            <li><Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><a href="#gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</a></li>
            <li><a href="#testimonials" className="nav-link" onClick={() => setIsOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li className="mobile-phone-contact">
              <a href="tel:+919310109620" className="phone-number" onClick={() => setIsOpen(false)}>
                <FaPhone className="phone-icon" />
                +91 93101 09620
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
