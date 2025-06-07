import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="subtitle">Get In Touch</h3>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4 className="info-title">Our Office</h4>
                <p>123 Industrial Area, Sector 62, Noida, Uttar Pradesh 201309, India</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <div>
                <h4 className="info-title">Phone</h4>
                <p>
                  <a href="tel:+911234567890">+91 12345 67890</a> (Office)<br />
                  <a href="tel:+919876543210">+91 98765 43210</a> (24/7 Emergency)
                </p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h4 className="info-title">Email</h4>
                <p>
                  <a href="mailto:info@printprorepairs.com">info@printprorepairs.com</a><br />
                  <a href="mailto:support@printprorepairs.com">support@printprorepairs.com</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <FaClock className="icon" />
              <div>
                <h4 className="info-title">Working Hours</h4>
                <p>
                  Monday - Saturday: 8:00 AM - 8:00 PM<br />
                  Sunday: Emergency Services Only
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            {/* <h3 className="subtitle">Send Us a Message</h3>
            <form>
              <label htmlFor="contact-name">Your Name</label>
              <input type="text" id="contact-name" required />

              <label htmlFor="contact-email">Your Email</label>
              <input type="email" id="contact-email" required />

              <label htmlFor="contact-phone">Phone Number</label>
              <input type="tel" id="contact-phone" required />

              <label htmlFor="contact-subject">Subject</label>
              <input type="text" id="contact-subject" required />

              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" rows="4" required></textarea>

              <button type="submit" className="submit-btn">Send Message</button>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
