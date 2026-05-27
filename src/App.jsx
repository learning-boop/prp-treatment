/**
 * App.jsx — PRP Treatment UK
 * Root application — routing + SEO + GA4 analytics
 * Pages manage their own Nav and Footer internally.
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

// SEO
import SEO           from './components/SEO/SEO';
import { Analytics } from './analytics/Analytics';
import {
  localBusinessSchema,
  physicianSchema,
  websiteSchema,
} from './data/schema';
import { getPageSeo } from './data/seoConfig';

// Layout
import Nav    from './components/Nav';
import Footer from './components/Footer';

// Homepage sections
import Hero         from './components/Hero';
import Cursor       from './components/Cursor';
import Stats        from './components/Stats';
import Doctor       from './components/Doctor';
import Process      from './components/Process';
import BeforeAfter  from './components/BeforeAfter';
import Services     from './components/Services';
import Testimonials from './components/Testimonials';
import Booking      from './components/Booking';

// Full pages (each manages its own Nav + Footer internally)
import TreatmentsPage   from './pages/TreatmentsPage';
import ConditionsPage   from './pages/ConditionsPage';
import FAQPage          from './pages/FAQPage';
import FAQTopicPage     from './pages/FAQTopicPage';
import TreatmentFAQPage from './pages/TreatmentFAQPage';

// ── Scroll to top + GA4 page view on route change ─────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    Analytics.pageView(pathname);
  }, [pathname]);
  return null;
}

// ── Global SEO injector ───────────────────────────────────────────────────
function PageSEO({ path, breadcrumb }) {
  const seo = getPageSeo(path);
  return (
    <SEO
      title={seo.title}
      description={seo.description}
      keywords={seo.keywords}
      path={path}
      schema={[localBusinessSchema, physicianSchema, websiteSchema]}
      breadcrumb={breadcrumb}
    />
  );
}

// ── Homepage ───────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <>
      <Cursor />
      <PageSEO path="/" />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Doctor />
        {/* <Process /> */}
        <BeforeAfter />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

// ── 404 ───────────────────────────────────────────────────────────────────
function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | PRP Treatment | Dr Matla"
        description="The page you are looking for cannot be found. Return to PRP Treatment — doctor-led platelet rich plasma."
        path="/404"
        noindex
      />
      <Nav />
      <main style={{
        minHeight: '60vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexDirection: 'column',
        gap: '1rem', padding: '8rem 1rem 4rem', textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '5rem', color: 'var(--gold)', lineHeight: 1 }}>404</div>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,4vw,2.8rem)', fontWeight: 300 }}>
          Page Not Found
        </h1>
        <div style={{ width: 44, height: 1, background: 'var(--gold)', margin: '0.5rem auto' }} />
        <p style={{ color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.8 }}>
          The page you are looking for has moved or does not exist.
          Return to the homepage to explore our PRP treatments.
        </p>
        <a href="/" className="btn-gold" style={{ marginTop: '1rem' }}>
          <span>Return to Homepage</span>
        </a>
      </main>
      <Footer />
    </>
  );
}

// ── App ───────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    Analytics.init();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Full pages — each has its own Nav + Footer */}
        <Route path="/treatments"          element={<TreatmentsPage />} />
        <Route path="/conditions"          element={<ConditionsPage />} />
        <Route path="/faq"                 element={<FAQPage />} />
        <Route path="/faq/treatment/:slug" element={<TreatmentFAQPage />} />
        <Route path="/faq/:slug"           element={<FAQTopicPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
