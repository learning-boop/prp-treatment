import './index.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Doctor from './components/Doctor';
import AboutPRP from './components/AboutPRP';
import Process from './components/Process';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Stats />
      {/* SWAPPED: Doctor section comes BEFORE About PRP */}
           {/* <AboutPRP /> */}
            
                   <Services />
                   <Doctor />
                   <Process />

      <BeforeAfter />
     


      <Testimonials />
      <Booking />
      <Footer />
    </>
  );
}
