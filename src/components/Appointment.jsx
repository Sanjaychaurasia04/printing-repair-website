import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaTools,
  FaWhatsapp,
} from 'react-icons/fa';

const AppointmentForm = () => {
  return (
    <section id="appointment" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Left Contact Info Panel */}
            <div className="md:w-1/2 bg-blue-800 text-white p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Book a Service Appointment</h2>
              <p className="mb-6">
                Click the WhatsApp button to instantly message our support team. 
                Our expert technicians will respond shortly to assist you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaPhone className="mt-1 mr-4 text-orange-400" />
                  <div>
                    <h3 className="font-bold">Call Us Directly</h3>
                    <a href="tel:+919310109620" className="hover:text-orange-400">+91 93101 09620</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaWhatsapp className="mt-1 mr-4 text-orange-400" />
                  <div>
                    <h3 className="font-bold">WhatsApp Us</h3>
                    <a href="https://wa.me/919310109620" className="hover:text-orange-400">+91 93101 09620</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mt-1 mr-4 text-orange-400" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <a href="mailto:sanjaychaurasi22@gmail.com" className="hover:text-orange-400">sanjaychaurasi22@gmail.com</a>
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

            {/* Right WhatsApp Button Panel */}
            <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center">
              <a
                href="https://wa.me/919310109620"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center text-xl"
              >
                <FaWhatsapp className="mr-3 text-2xl" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
