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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Contact & Book Appointment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Get In Touch</h3>

            <div className="flex items-start mb-6">
              <FaMapMarkerAlt className="text-orange-500 text-xl mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Our Office</h4>
                <p className="text-gray-600">
                  123 Industrial Area, Sector 62, Noida, Uttar Pradesh 201309, India
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <FaPhone className="text-orange-500 text-xl mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">
                  <a href="tel:+919310109620" className="hover:text-orange-500">+91 93101 09620</a> (Office)<br />
                  <a href="tel:+919310109620" className="hover:text-orange-500">+91 9310109620</a> (Emergency)
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <FaEnvelope className="text-orange-500 text-xl mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">
                  <a href="mailto:sanjaychaurasi22@gmail.com" className="hover:text-orange-500">
                    sanjaychaurasi22@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaClock className="text-orange-500 text-xl mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Working Hours</h4>
                <p className="text-gray-600">
                  Monday - Saturday: 8:00 AM - 8:00 PM<br />
                  Sunday: Emergency Services Only
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="bg-blue-800 text-white rounded-lg shadow-lg p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold mb-4">Need Help Fast?</h3>
            <p className="mb-6 text-lg">
              Click the button below to start a WhatsApp chat with our support team. No forms, no delays!
            </p>
            <a
              href="https://wa.me/919310109620"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 transition duration-300 text-white font-bold py-4 px-6 rounded-lg text-xl flex items-center"
            >
              <FaWhatsapp className="mr-3 text-2xl" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAppointmentSection;