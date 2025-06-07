import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaTools, FaWhatsapp } from 'react-icons/fa';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    machineType: '',
    issue: '',
    date: '',
    time: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = '911234567890'; // Replace with your WhatsApp number (without + or 00)
    const message = `New Appointment Request:%0A%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Email: ${formData.email}%0A
Machine Type: ${formData.machineType}%0A
Issue: ${formData.issue}%0A
Preferred Date: ${formData.date}%0A
Preferred Time: ${formData.time}%0A%0A
Please contact the client to confirm the appointment.`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Appointment booked:', formData);
    
    // Send WhatsApp message
    sendWhatsAppMessage();
    
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        machineType: '',
        issue: '',
        date: '',
        time: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="appointment" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-800 text-white p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Book a Service Appointment</h2>
              <p className="mb-6">
                Fill out the form to schedule a repair or maintenance service for your printing machine. 
                Our expert technicians will contact you to confirm the appointment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaPhone className="mt-1 mr-4 text-orange-400" />
                  <div>
                    <h3 className="font-bold">Call Us Directly</h3>
                    <a href="tel:+911234567890" className="hover:text-orange-400">+91 12345 67890</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaWhatsapp className="mt-1 mr-4 text-orange-400" />
                  <div>
                    <h3 className="font-bold">WhatsApp Us</h3>
                    <a href="https://wa.me/911234567890" className="hover:text-orange-400">+91 12345 67890</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mt-1 mr-4 text-orange-400" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <a href="mailto:service@printprorepairs.com" className="hover:text-orange-400">service@printprorepairs.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaClock className="mt-1 mr-4 text-orange-400" />
                  <div>
                    <h3 className="font-bold">Working Hours</h3>
                    <p>Mon-Sat: 8:00 AM - 8:00 PM</p>
                    <p>Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your appointment request has been submitted. We'll contact you shortly to confirm.</p>
                  <div className="mt-6">
                    <p className="text-gray-600 mb-2">You can also contact us directly via:</p>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="tel:+911234567890" 
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                      >
                        <FaPhone size={20} />
                      </a>
                      <a 
                        href="https://wa.me/911234567890" 
                        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                      >
                        <FaWhatsapp size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      <FaUser className="inline mr-2 text-blue-800" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="phone">
                      <FaPhone className="inline mr-2 text-blue-800" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      <FaEnvelope className="inline mr-2 text-blue-800" />
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="machineType">
                      <FaTools className="inline mr-2 text-blue-800" />
                      Machine Type
                    </label>
                    <select
                      id="machineType"
                      name="machineType"
                      value={formData.machineType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Machine Type</option>
                      <option value="Heidelberg Speedmaster">Heidelberg Speedmaster</option>
                      <option value="Heidelberg SM 52">Heidelberg SM 52</option>
                      <option value="Heidelberg SM 74">Heidelberg SM 74</option>
                      <option value="Other Heidelberg">Other Heidelberg Model</option>
                      <option value="Other Brand">Other Printing Machine</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="issue">
                      Describe the Issue
                    </label>
                    <textarea
                      id="issue"
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="date">
                        <FaCalendarAlt className="inline mr-2 text-blue-800" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="time">
                        <FaClock className="inline mr-2 text-blue-800" />
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <FaWhatsapp className="mr-2" />
                    Book Appointment via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;