import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Doctor from './components/Doctor';
import Process from './components/Process';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import TreatmentsPage from './pages/TreatmentsPage';
import ConditionsPage from './pages/ConditionsPage';
import FAQPage from './pages/FAQPage';
import FAQTopicPage from './pages/FAQTopicPage';
import TreatmentFAQPage from './pages/TreatmentFAQPage';

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
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

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/faq/treatment/:slug" element={<TreatmentFAQPage />} />
        <Route path="/faq/:slug" element={<FAQTopicPage />} />
      </Routes>
    </BrowserRouter>
  );
}