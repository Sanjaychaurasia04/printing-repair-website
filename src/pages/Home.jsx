
import Hero from '../components/Hero';
import Header from '../components/Header';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import AppointmentForm from '../components/Appointment';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        <AppointmentForm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;