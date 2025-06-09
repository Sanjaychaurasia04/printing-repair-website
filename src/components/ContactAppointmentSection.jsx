import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from 'react-icons/fa';
import './ContactAppointmentSection.css';

const ContactAppointmentSection = () => {
  return (
    <section id="contact" className="contact-appointment-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact & Book Appointment</h2>
        <div className="contact-grid">

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="contact-subheading">Get In Touch</h3>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4 className="contact-label">Our Office</h4>
                <p className="contact-text">
                  123 Industrial Area, Sector 62, Noida, Uttar Pradesh 201309, India
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4 className="contact-label">Phone</h4>
                <p className="contact-text">
                  <a href="tel:+919310109620">+91 93101 09620</a> (Office)<br />
                  <a href="tel:+919310109620">+91 9310109620</a> (Emergency)
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4 className="contact-label">Email</h4>
                <p className="contact-text">
                  <a href="mailto:sanjaychaurasi22@gmail.com">sanjaychaurasi22@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaClock className="contact-icon" />
              <div>
                <h4 className="contact-label">Working Hours</h4>
                <p className="contact-text">
                  Monday - Saturday: 8:00 AM - 8:00 PM<br />
                  Sunday: Emergency Services Only
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="whatsapp-section">
            <h3 className="whatsapp-heading">Need Help Fast?</h3>
            <p className="whatsapp-text">
              Click the button below to start a WhatsApp chat with our support team. No forms, no delays!
            </p>
            <a
              href="https://wa.me/919310109620"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <FaWhatsapp className="whatsapp-icon" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAppointmentSection;
