import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FadeIn } from '../hooks/useFadeIn';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { prpFaqTopics, prpFaqMenu } from '../data/prpFaqTopics';

function FAQItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-a-wrap" style={{ maxHeight: open ? '800px' : '0' }}>
        <div className="faq-a">{answer}</div>
      </div>
    </div>
  );
}

export default function FAQTopicPage() {
  const { slug } = useParams();
  const topic = prpFaqTopics[slug];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // Update document title for SEO
  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} | Dr Matla PRP Clinic`;
    }
    return () => { document.title = 'PRP Treatment | Dr Matla'; };
  }, [topic]);

  if (!topic) return <Navigate to="/faq" replace />;

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="faq-hero">
        <div className="wrap faq-hero-inner">
          <FadeIn>
            {/* Breadcrumb */}
            <div className="faq-breadcrumb">
              <Link to="/">Home</Link>
              <span className="faq-bc-sep">›</span>
              <Link to="/faq">FAQ &amp; Guides</Link>
              <span className="faq-bc-sep">›</span>
              <span className="faq-bc-current">{topic.short}</span>
            </div>

            <div className="eyebrow center">{topic.short}</div>
            <h1 className="sh text-center">{topic.title}</h1>
            <div className="gd center" />
            <p className="faq-hero-sub">{topic.intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* Topic Side-Nav + Questions */}
      <section className="sec faq-topic-sec">
        <div className="wrap faq-topic-wrap">

          {/* Side nav — all other topics */}
          <aside className="faq-topic-side">
            <FadeIn>
              <div className="faq-side-label">All FAQ Topics</div>
              <nav className="faq-side-nav">
                <Link to="/faq" className="faq-side-link">All Questions</Link>
                {prpFaqMenu.filter(m => m.slug).map(item => (
                  <Link
                    key={item.slug}
                    to={`/faq/${item.slug}`}
                    className={`faq-side-link${item.slug === slug ? ' faq-side-link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </FadeIn>
          </aside>

          {/* Questions list */}
          <div className="faq-topic-main">
            <FadeIn>
              <div className="faq-topic-count">
                {topic.faqs.length} questions answered
              </div>
            </FadeIn>

            <div className="faq-list">
              {topic.faqs.map((f, i) => (
                <FadeIn key={f.q} delay={Math.min(i * 0.04, 0.32)}>
                  <FAQItem
                    question={f.q}
                    answer={f.a}
                    defaultOpen={i === 0}
                  />
                </FadeIn>
              ))}
            </div>

            {/* Related topics */}
            {topic.related?.length > 0 && (
              <FadeIn>
                <div className="faq-related">
                  <div className="eyebrow">Related Topics</div>
                  <h3 className="faq-related-h">Continue Reading</h3>
                  <div className="gd" />
                  <div className="faq-related-list">
                    {topic.related.map(r => prpFaqTopics[r] && (
                      <Link key={r} to={`/faq/${r}`} className="faq-related-card">
                        <span className="faq-related-card-label">{prpFaqTopics[r].short}</span>
                        <span className="faq-related-card-title">{prpFaqTopics[r].title}</span>
                        <span className="faq-related-card-cta">Read questions →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* CTA — Still have questions */}
      <section className="faq-still-sec">
        <div className="wrap faq-still-inner">
          <FadeIn>
            <div className="faq-still-content">
              <div className="eyebrow">Personal Guidance</div>
              <h2 className="sh">Still Have <em>Questions?</em></h2>
              <div className="gd" />
              <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Every patient&apos;s situation is unique. A private consultation with Dr Matla allows a thorough discussion of your specific concerns, medical history and the most appropriate treatment options for you.
              </p>
              <a href="/#booking" className="btn-gold"><span>Book a Consultation</span></a>
            </div>
            <div className="faq-still-contact">
              <div className="faq-contact-item">
                <div className="faq-contact-label">Address</div>
                <div className="faq-contact-val">Harley Street, London W1G</div>
              </div>
              <div className="faq-contact-divider" />
              <div className="faq-contact-item">
                <div className="faq-contact-label">Telephone</div>
                <div className="faq-contact-val">+44 (0) 20 XXXX XXXX</div>
              </div>
              <div className="faq-contact-divider" />
              <div className="faq-contact-item">
                <div className="faq-contact-label">Email</div>
                <div className="faq-contact-val">enquiries@drmatla.co.uk</div>
              </div>
              <div className="faq-contact-divider" />
              <div className="faq-contact-item">
                <div className="faq-contact-label">Clinic Hours</div>
                <div className="faq-contact-val">Mon–Sat, 9am–6pm</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Medical disclaimer */}
      <section className="faq-disclaimer-sec">
        <div className="wrap">
          <FadeIn>
            <p className="faq-disclaimer">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for general educational purposes only and does not constitute medical advice. PRP treatments are medical procedures — suitability is determined on an individual basis following a full clinical assessment by Dr Matla. Results vary between patients. All treatments are subject to a consultation and may not be appropriate for all individuals.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
