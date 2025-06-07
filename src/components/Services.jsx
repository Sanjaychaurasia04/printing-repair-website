import React from 'react';
import { FaTools, FaCogs, FaTachometerAlt, FaShieldAlt } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaTools size={40} className="icon-orange" />,
      title: "Heidelberg Machine Repair",
      description: "Expert repair and maintenance for all Heidelberg models including Speedmaster, SM 52, SM 74, and more.",
    },
    {
      icon: <FaCogs size={40} className="icon-orange" />,
      title: "Preventive Maintenance",
      description: "Regular check-ups to prevent breakdowns and extend the lifespan of your printing machines.",
    },
    {
      icon: <FaTachometerAlt size={40} className="icon-orange" />,
      title: "Performance Optimization",
      description: "Tune-ups to ensure your machines are running at maximum efficiency and print quality.",
    },
    {
      icon: <FaShieldAlt size={40} className="icon-orange" />,
      title: "Emergency Repairs",
      description: "24/7 emergency service to minimize downtime when your machines break down.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-heading">Our Expert Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
