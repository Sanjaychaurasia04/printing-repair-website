import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "#gallery" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact", path: "#contact" },
  ];

  const services = [
    { name: "Heidelberg Machine Repair", path: "/services" },
    { name: "Preventive Maintenance", path: "/services" },
    { name: "Performance Optimization", path: "/services" },
    { name: "Emergency Repairs", path: "/services" },
    { name: "Spare Parts Supply", path: "/services" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="footer-title">PrintPro Repairs</h3>
            <p className="footer-description">
              Professional printing machine repair services across India.<br />
              Specializing in Heidelberg and other major brands.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook" className="social-link"><FaFacebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="social-link"><FaTwitter size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="social-link"><FaLinkedin size={20} /></a>
              <a href="#" aria-label="Instagram" className="social-link"><FaInstagram size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-subtitle">Our Services</h4>
            <ul>
              {services.map((service, i) => (
                <li key={i}>
                  <a href={service.path} className="footer-link">{service.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-subtitle">Contact Info</h4>
            <address className="footer-address">
              <p>123 Industrial Area, Sector 62</p>
              <p>Noida, Uttar Pradesh 201309</p>
              <p>India</p>
              <p><a href="tel:+911234567890" className="footer-link">+91 12345 67890</a></p>
              <p><a href="mailto:info@printprorepairs.com" className="footer-link">info@printprorepairs.com</a></p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PrintPro Repairs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
