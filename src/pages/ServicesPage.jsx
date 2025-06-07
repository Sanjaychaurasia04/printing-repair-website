import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServicesPage.css';
import img1 from '../assets/img1.jpg';

const ServicesPage = () => {
  const services = [
    {
      image: img1,
      title: 'Heidelberg Machine Repair',
      description:
        'Our certified technicians specialize in repairing all Heidelberg printing machines including Speedmaster, SM 52, SM 74, and other models. We handle mechanical, electrical, and electronic issues with precision.',
      details: [
        'On-site and workshop repairs',
        'Troubleshooting and diagnostics',
        'Component replacement and calibration',
        'Ink system and dampening system repairs',
        'Electrical and control system fixes',
      ],
    },
    {
      image: '/images/preventive-maintenance.jpg',
      title: 'Preventive Maintenance',
      description:
        'Regular maintenance is key to avoiding costly breakdowns. Our comprehensive maintenance plans keep your machines running at peak performance.',
      details: [
        'Scheduled maintenance visits',
        'Lubrication and cleaning',
        'Wear and tear inspection',
        'Performance testing',
        'Maintenance reports and recommendations',
      ],
    },
    {
      image: '/images/performance-optimization.jpg',
      title: 'Performance Optimization',
      description:
        "Maximize your machine's output and print quality with our optimization services. We fine-tune your equipment for better speed and precision.",
      details: [
        'Color registration adjustment',
        'Feeder and delivery optimization',
        'Drying system calibration',
        'Waste reduction tuning',
        'Throughput improvement',
      ],
    },
    {
      image: '/images/emergency-repairs.jpg',
      title: 'Emergency Repairs',
      description:
        'When your machine breaks down unexpectedly, our rapid response team is available 24/7 to get you back up and running with minimal downtime.',
      details: [
        '24/7 emergency service',
        'Priority response for critical failures',
        'Temporary fixes to keep production going',
        'Follow-up permanent repairs',
        'Nationwide service coverage',
      ],
    },
    {
      image: '/images/spare-parts.jpg',
      title: 'Spare Parts Supply',
      description:
        'Genuine and high-quality aftermarket parts for all major printing machine brands. We source hard-to-find components quickly.',
      details: [
        'Original manufacturer parts',
        'Certified aftermarket alternatives',
        'Express delivery available',
        'Installation support',
        'Warranty on all parts',
      ],
    },
  ];

  return (
    <div className="services-page flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="title">Our Services</h1>
            <p className="subtitle">
              Comprehensive repair and maintenance solutions for Heidelberg and
              other printing machines across India.
            </p>
          </div>

          <div className="services-list space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <div className="md:flex">
                  <div className="service-image-container md:w-1/3 p-8 bg-blue-50 flex flex-col items-center justify-center">
                    <img
                      src={img1}
                      alt={service.title}
                      className="service-image"
                    />
                    <h2 className="service-title">{service.title}</h2>
                  </div>
                  <div className="service-content md:w-2/3 p-8">
                    <p className="service-description">{service.description}</p>
                    <h3 className="service-includes-title">Service Includes:</h3>
                    <ul className="service-details grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.details.map((detail, i) => (
                        <li key={i} className="service-detail-item flex items-start">
                          <span className="checkmark text-orange-600 mr-2">✓</span>
                          <span className="detail-text text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/#appointment"
                      className="book-btn inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
