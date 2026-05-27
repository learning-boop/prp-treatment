import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../hooks/useFadeIn';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const hairTreatments = [
  {
    id: 'hair-restoration',
    img: '/assets/hair.png',
    title: 'PRP Hair Restoration',
    tagline: 'Awaken dormant follicles. Restore natural density.',
    desc: 'Our signature hair restoration protocol delivers concentrated platelet-rich plasma directly to the scalp, stimulating weak and dormant follicles. Clinically refined for both diffuse thinning and pattern hair loss.',
    benefits: ['Reduced hair shedding', 'Improved follicle strength', 'Better scalp circulation', 'Fuller hair appearance'],
    price: 'From £500',
    sessions: '3–4 sessions recommended',
    downtime: '24–48 hours',
  },
  {
    id: 'female-hair-loss',
    img: '/assets/hair.png',
    title: 'PRP for Female Hair Loss',
    tagline: 'Precision treatment for hormonal and stress-related thinning.',
    desc: 'Female hair thinning presents uniquely — diffuse, subtle, emotionally impactful. Dr Matla\'s protocol is tailored to the specific patterns of female hair loss, addressing hormonal, postpartum and stress-related causes.',
    benefits: ['Hormonal hair loss support', 'Postpartum shedding', 'Crown thinning', 'Improved hair density'],
    price: 'From £480',
    sessions: '3–6 sessions recommended',
    downtime: '24–48 hours',
  },
  {
    id: 'male-pattern-baldness',
    img: '/assets/bald.png',
    title: 'Male Pattern Baldness PRP',
    tagline: 'Slow progression. Restore confidence.',
    desc: 'Targeted scalp injections delivered with precision to the areas of greatest loss. PRP may slow the progression of androgenetic alopecia and support regrowth in follicles that retain viability.',
    benefits: ['Slows pattern progression', 'Stimulates viable follicles', 'Improves hairline density', 'Non-surgical approach'],
    price: 'From £480',
    sessions: '3–4 sessions recommended',
    downtime: '24–48 hours',
  },
  {
    id: 'hair-transplant-enhancement',
    img: '/assets/hair.png',
    title: 'PRP After Hair Transplant',
    tagline: 'Maximise graft survival. Accelerate density.',
    desc: 'PRP applied at the time of or following hair transplant surgery significantly improves graft survival rates and accelerates the establishment of new follicles. A critical adjunct to surgical restoration.',
    benefits: ['Improved graft survival', 'Faster healing', 'Accelerated growth phase', 'Enhanced final density'],
    price: 'From £550',
    sessions: '1–3 sessions post-transplant',
    downtime: 'Per transplant protocol',
  },
];

const skinTreatments = [
  {
    id: 'facial-rejuvenation',
    img: '/assets/face.png',
    title: 'PRP Facial Rejuvenation',
    tagline: 'Collagen from within. Luminosity restored.',
    desc: 'Growth factors are reintroduced to the skin at depth, triggering a natural regenerative response. Skin becomes visibly brighter, firmer and more refined over 4–8 weeks post-treatment.',
    benefits: ['Improved skin texture', 'Natural collagen boost', 'Reduced fine lines', 'Enhanced radiance'],
    price: 'From £450',
    sessions: '2–3 sessions recommended',
    downtime: '24–72 hours',
  },
  {
    id: 'vampire-facial',
    img: '/assets/face3.png',
    title: 'Vampire Facial® (PRP + Microneedling)',
    tagline: 'Maximum absorption. Maximum regeneration.',
    desc: 'The most potent PRP skin treatment — microneedling creates thousands of microchannels that allow PRP to penetrate at optimal depth. The result is dramatically improved collagen stimulus and skin renewal.',
    benefits: ['Deep PRP penetration', 'Maximised collagen stimulus', 'Improved absorption', 'Superior skin renewal'],
    price: 'From £650',
    sessions: '2–4 sessions recommended',
    downtime: '48–72 hours',
  },
  {
    id: 'acne-scar-treatment',
    img: '/assets/acne.png',
    title: 'PRP for Acne Scars',
    tagline: 'Remodel scar tissue. Rebuild smooth skin.',
    desc: 'Growth factors in PRP actively remodel scarred tissue and stimulate new collagen formation. Combined with microneedling, this treatment visibly reduces the depth and appearance of acne scarring.',
    benefits: ['Reduced scar depth', 'Improved skin texture', 'Even skin surface', 'Natural remodelling'],
    price: 'From £490',
    sessions: '3–6 sessions recommended',
    downtime: '48–72 hours',
  },
  {
    id: 'under-eye',
    img: '/assets/undereye.png',
    title: 'PRP Under Eye Treatment',
    tagline: 'Dark circles and hollowness — beautifully refreshed.',
    desc: 'The delicate periorbital region responds exceptionally well to PRP. Gentle injections reduce the appearance of dark circles, improve skin thickness and diminish the hollow tear trough area.',
    benefits: ['Reduced dark circles', 'Improved skin thickness', 'Tear trough improvement', 'Refreshed appearance'],
    price: 'From £380',
    sessions: '2–3 sessions recommended',
    downtime: '24–48 hours',
  },
  {
    id: 'neck-decolletage',
    img: '/assets/neck.png',
    title: 'Neck & Décolletage Renewal',
    tagline: 'Tighten, brighten, restore.',
    desc: 'The neck and chest are among the earliest areas to show sun damage and skin laxity. PRP injections and microneedling combination treatments restore firmness and luminosity to these exposed areas.',
    benefits: ['Improved skin firmness', 'Brighter skin tone', 'Reduced sun damage', 'Natural rejuvenation'],
    price: 'From £420',
    sessions: '2–4 sessions recommended',
    downtime: '24–48 hours',
  },
];

const combinedTreatments = [
  {
    id: 'prp-co2-laser',
    img: '/assets/co.png',
    title: 'PRP + Fractional CO₂ Laser',
    tagline: 'Laser resurfacing amplified.',
    desc: 'Fractional CO₂ laser creates precise channels of thermal injury that trigger remodelling. Adding PRP to this process dramatically accelerates healing and enhances the quality of new skin formed.',
    benefits: ['Accelerated healing', 'Superior skin renewal', 'Enhanced collagen formation', 'Improved resurfacing results'],
    price: 'From £750',
    sessions: '1–3 sessions',
    downtime: '5–7 days',
  },
  {
    id: 'prp-dermapen',
    img: '/assets/face3.png',
    title: 'PRP + Dermapen',
    tagline: 'Precision microneedling with regenerative power.',
    desc: 'Dermapen creates controlled micro-injuries that, when combined with PRP, produce a powerful collagen stimulus. Suitable for all skin types with minimal downtime and exceptional results.',
    benefits: ['All skin types suitable', 'Collagen stimulation', 'Minimal downtime', 'Natural improvement'],
    price: 'From £580',
    sessions: '3–4 sessions recommended',
    downtime: '24–48 hours',
  },
];

function TreatmentCard({ treatment, reverse = false }) {
  return (
    <FadeIn>
      <div className={`tx-card ${reverse ? 'tx-card--rev' : ''}`}>
        <div className="tx-img-wrap">
          <img src={treatment.img} alt={treatment.title} className="tx-img" />
          <div className="tx-img-overlay" />
        </div>
        <div className="tx-body">
          <div className="eyebrow">{treatment.sessions}</div>
          <h3 className="tx-title">{treatment.title}</h3>
          <p className="tx-tagline">{treatment.tagline}</p>
          <div className="gd" />
          <p className="tx-desc">{treatment.desc}</p>
          <ul className="tx-benefits">
            {treatment.benefits.map(b => (
              <li key={b}><span className="tx-check">✦</span>{b}</li>
            ))}
          </ul>
          <div className="tx-footer">
            <span className="tx-price">{treatment.price}</span>
            <div className="tx-meta">Downtime: {treatment.downtime}</div>
          </div>
          <a href="#booking" className="btn-gold" style={{ marginTop: '1.5rem' }}>
            <span>Book Consultation</span>
          </a>
        </div>
      </div>
    </FadeIn>
  );
}

export default function TreatmentsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Nav />
      {/* Hero */}
      <section className="tx-hero">
        <div className="tx-hero-bg" />
        <div className="wrap tx-hero-inner">
          <FadeIn>
            <div className="eyebrow center">Dr Matla Aesthetics Clinic</div>
            <h1 className="sh text-center">
              PRP <em>Treatments</em>
            </h1>
            <div className="gd center" />
            <p className="tx-hero-sub">
              Every treatment begins with a detailed clinical consultation. Your biology is unique — your treatment plan should be too.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="tx-hero-links">
              <a href="#hair" className="btn-gold"><span>Hair Treatments</span></a>
              <a href="#skin" className="btn-ghost">Skin Treatments</a>
              <a href="#combined" className="btn-ghost">Combined</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hair */}
      <section className="sec" id="hair">
        <div className="wrap">
          <FadeIn>
            <div className="eyebrow">Scalp & Hair Restoration</div>
            <h2 className="sh">Hair PRP <em>Treatments</em></h2>
            <div className="gd" />
            <p className="tx-section-intro">
              PRP hair treatments are designed to support scalp health, awaken dormant follicles and provide a natural, non-surgical approach to hair restoration. Suitable for both male and female hair loss patterns.
            </p>
          </FadeIn>
          <div className="tx-list">
            {hairTreatments.map((t, i) => (
              <TreatmentCard key={t.id} treatment={t} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="tx-divider" />

      {/* Skin */}
      <section className="sec" id="skin">
        <div className="wrap">
          <FadeIn>
            <div className="eyebrow">Facial & Skin Rejuvenation</div>
            <h2 className="sh">Skin PRP <em>Treatments</em></h2>
            <div className="gd" />
            <p className="tx-section-intro">
              PRP facial treatments harness the regenerative power of growth factors to improve skin texture, tone and collagen production — with minimal downtime and entirely natural results.
            </p>
          </FadeIn>
          <div className="tx-list">
            {skinTreatments.map((t, i) => (
              <TreatmentCard key={t.id} treatment={t} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="tx-divider" />

      {/* Combined */}
      <section className="sec" id="combined">
        <div className="wrap">
          <FadeIn>
            <div className="eyebrow">Enhanced Protocols</div>
            <h2 className="sh">Combination <em>Treatments</em></h2>
            <div className="gd" />
            <p className="tx-section-intro">
              PRP can be combined with advanced procedures to amplify results, accelerate healing and deliver more comprehensive skin renewal. Dr Matla will recommend the optimal combination for your individual goals.
            </p>
          </FadeIn>
          <div className="tx-list">
            {combinedTreatments.map((t, i) => (
              <TreatmentCard key={t.id} treatment={t} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="tx-cta-band">
        <div className="wrap text-center">
          <FadeIn>
            <div className="eyebrow center">Begin Your Journey</div>
            <h2 className="sh">Ready to <em>Restore?</em></h2>
            <div className="gd center" />
            <p style={{ color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Book a private consultation with Dr Matla. A full assessment of your hair or skin concern will be conducted before any treatment is recommended.
            </p>
            <a href="/#booking" className="btn-gold"><span>Reserve Your Consultation</span></a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
