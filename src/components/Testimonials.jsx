import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Mehta",
      company: "Mehta Printers, Mumbai",
      rating: 5,
      comment: "Excellent service! Our Heidelberg SM 74 was down and they had it running within hours. The technician was highly skilled and professional.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Sharma Packaging, Delhi",
      rating: 5,
      comment: "Regular maintenance from this team has kept our machines running smoothly for years. Their preventive approach saves us money on major repairs.",
    },
    {
      id: 3,
      name: "Vikram Patel",
      company: "Patel Press, Ahmedabad",
      rating: 4,
      comment: "Quick response to our emergency call. The issue was diagnosed accurately and fixed efficiently. Highly recommend their services.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "star-filled" : "star-empty"} 
                  />
                ))}
              </div>
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-comment">{testimonial.comment}</p>
              <div className="testimonial-footer">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
