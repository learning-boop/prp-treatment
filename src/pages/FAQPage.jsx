import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../hooks/useFadeIn';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { treatmentFAQs } from './TreatmentFAQPage';

const faqCategories = [
  {
    id: 'general',
    label: 'General',
    questions: [
      {
        q: 'What is PRP treatment?',
        a: 'PRP stands for Platelet-Rich Plasma. It is a minimally invasive aesthetic treatment that uses the patient\'s own blood. A small blood sample is processed in a centrifuge to concentrate platelets containing growth factors, which are then injected or applied to the treatment area to support natural regeneration. Dr Matla offers PRP as a core treatment, tailored to each patient\'s individual needs and goals.',
      },
      {
        q: 'Is PRP treatment safe?',
        a: 'PRP is widely considered safe because it uses the patient\'s own biological material — there is no foreign substance introduced. Dr Matla follows strict clinical and hygiene protocols at every stage. As with any medical procedure, there are temporary side effects including redness, swelling and bruising, which typically resolve within 24–72 hours.',
      },
      {
        q: 'How long does a PRP treatment session take?',
        a: 'A typical PRP session takes between 60 and 90 minutes from blood draw through to treatment completion. The centrifuge processing takes approximately 10–15 minutes. Dr Matla conducts a thorough consultation before your first session, which is additional to this treatment time.',
      },
      {
        q: 'How many sessions will I need?',
        a: 'The number of sessions depends on your individual concern and treatment goals. Most patients benefit from an initial course of 3–4 sessions spaced 4–6 weeks apart, followed by maintenance sessions every 6–12 months. Dr Matla will discuss a personalised treatment plan at your consultation.',
      },
      {
        q: 'When will I see results?',
        a: 'PRP results develop gradually as growth factors stimulate collagen production and follicle activity over time. Initial improvements may be visible within 4–6 weeks of the first session, with optimal results typically appearing 3–6 months after completing an initial treatment course. Dr Matla will monitor your progress throughout and advise on the best next steps.',
      },
      {
        q: 'Is the treatment painful?',
        a: 'Topical anaesthetic cream is applied before treatment to minimise discomfort. Most patients report mild pressure or a stinging sensation during injections, which is well-tolerated. The scalp may be more sensitive than facial areas. Your comfort throughout the procedure is a clinical priority for Dr Matla.',
      },
    ],
  },
  {
    id: 'hair',
    label: 'Hair PRP',
    questions: [
      {
        q: 'Can PRP regrow lost hair?',
        a: 'PRP can stimulate follicles that are in a weakened or resting state, and may support the transition back into active growth. It is most effective in areas where follicles are still viable. In cases of complete follicle loss (areas of permanent baldness), PRP is unlikely to produce regrowth. Dr Matla will give an honest assessment of your individual case at consultation.',
      },
      {
        q: 'Why is my hair thinning suddenly?',
        a: 'Sudden hair thinning can have several causes — hormonal changes, high stress, illness, nutritional deficiencies, or genetic predisposition. A condition called telogen effluvium often causes shedding 2–3 months after a triggering event. Dr Matla will assess your hair loss pattern and medical history to understand the underlying cause before recommending treatment.',
      },
      {
        q: 'Is PRP suitable for female hair loss?',
        a: 'Yes. Female hair loss presents differently to male pattern baldness — typically as diffuse thinning across the crown and parting rather than distinct recession. PRP protocols at Dr Matla\'s clinic are adapted to address female-specific patterns, including hormonal and postpartum hair loss.',
      },
      {
        q: 'How long does hair PRP take to work?',
        a: 'Most patients notice a reduction in shedding within the first few weeks of treatment. Visible improvement in density and hair quality typically develops over 3–6 months as follicles respond to growth factor stimulation. Dr Matla recommends a full course of 3–4 sessions before results can be properly assessed.',
      },
      {
        q: 'Can PRP be used after a hair transplant?',
        a: 'PRP is an excellent adjunct to hair transplant surgery. Applied at the time of or shortly after the procedure, PRP can improve graft survival, accelerate healing and support earlier establishment of new hair growth. Dr Matla regularly incorporates PRP as part of the post-transplant protocol, and many surgeons now do so as standard.',
      },
      {
        q: 'What is the best treatment for hair thinning?',
        a: 'The most appropriate treatment depends on the cause and extent of hair loss, your age, hormonal profile and overall health. PRP is a clinically recognised option for non-surgical hair restoration, particularly in the early-to-mid stages of loss. Dr Matla will review all relevant factors and recommend the most suitable approach at consultation.',
      },
    ],
  },
  {
    id: 'skin',
    label: 'Skin PRP',
    questions: [
      {
        q: 'What skin concerns can PRP treat?',
        a: 'PRP is used to address a wide range of skin concerns including fine lines and wrinkles, acne scars, uneven skin texture, dull complexion, enlarged pores, under-eye darkness, sun-damaged skin and mild skin laxity. Dr Matla also offers PRP in combination with microneedling (Vampire Facial®) and fractional CO₂ laser for enhanced results.',
      },
      {
        q: 'What is the Vampire Facial?',
        a: 'The Vampire Facial is a treatment that combines PRP with microneedling. Microneedling creates thousands of microchannels in the skin, which allows PRP to penetrate at optimal depth and dramatically enhances collagen stimulus. Dr Matla offers this as one of the most comprehensive skin rejuvenation protocols available, addressing texture, tone and fine lines simultaneously.',
      },
      {
        q: 'How does PRP help with acne scars?',
        a: 'Growth factors within PRP actively remodel scarred tissue by stimulating fibroblast activity and new collagen formation. When combined with microneedling, the mechanical disruption of scar tissue further facilitates remodelling. Dr Matla typically recommends 3–6 sessions for significant improvement, depending on scar depth and type.',
      },
      {
        q: 'Can PRP help with anti-ageing?',
        a: 'Yes. PRP is widely used as a preventative and corrective anti-ageing treatment. It stimulates natural collagen and elastin production, improves skin texture and tone, and supports the skin\'s regenerative capacity. Dr Matla delivers results that are gradual and natural-looking — consistent with the body\'s own healing mechanisms.',
      },
      {
        q: 'Is PRP good for under-eye treatment?',
        a: 'The periorbital area responds well to PRP. Dr Matla uses gentle injections to improve skin thickness, reduce the visibility of dark circles and soften the appearance of the tear trough — without fillers or surgical intervention. Results take several weeks to develop and are most notable after a course of 2–3 sessions.',
      },
      {
        q: 'How is PRP different from fillers or Botox?',
        a: 'PRP is a regenerative treatment — it stimulates the skin\'s own biology to produce collagen and improve quality from within. Fillers add volume and Botox relaxes muscles; both produce more immediate results but do not address underlying skin quality. Dr Matla\'s PRP results are more gradual but represent genuine tissue improvement rather than external augmentation.',
      },
    ],
  },
  {
    id: 'cost',
    label: 'Cost & Practicalities',
    questions: [
      {
        q: 'How much does PRP treatment cost?',
        a: 'Pricing varies by treatment type and the number of sessions required. Skin PRP treatments typically range from £350–£750 per session; hair restoration treatments from £480–£550; combination treatments from £580–£900. Dr Matla provides a personalised quote following your consultation, once the most appropriate protocol has been determined.',
      },
      {
        q: 'Is PRP available on the NHS?',
        a: 'PRP for aesthetic hair and skin concerns is not available on the NHS and is provided as a private treatment by Dr Matla. Some specialist NHS services may offer PRP for orthopaedic or wound-healing indications, but aesthetic PRP is outside the scope of NHS provision.',
      },
      {
        q: 'What should I do before my PRP session?',
        a: 'Arrive well-hydrated on the day of treatment. Avoid blood-thinning medications such as aspirin or ibuprofen for 48 hours prior unless prescribed by your GP. Do not apply topical products to the treatment area on the day. If you have any concerns about your health or medications, Dr Matla\'s clinic team is available to advise in advance.',
      },
      {
        q: 'What is the recovery time after PRP?',
        a: 'Most patients experience mild redness, swelling or tenderness in the treated area for 24–72 hours. This is a normal response and typically resolves quickly. You should avoid heavy exercise, excessive sun exposure and applying make-up for 24 hours post-treatment. Dr Matla\'s team provides detailed aftercare instructions specific to your treatment area.',
      },
      {
        q: 'Can I have PRP if I am pregnant?',
        a: 'PRP treatment is not recommended during pregnancy or while breastfeeding. Dr Matla takes a precautionary position as there is insufficient clinical data on PRP in these populations. Please notify the clinic if you are pregnant or planning to become pregnant, and treatment can be discussed for a suitable time after.',
      },
      {
        q: 'How do I book a consultation?',
        a: 'You can book a private consultation with Dr Matla through the booking form on this website, by telephone or by email. The consultation involves a full medical history review, assessment of your hair or skin concern, discussion of treatment options and expectations, and a personalised treatment recommendation.',
      },
    ],
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-a-wrap" style={{ maxHeight: open ? '600px' : '0' }}>
        <div className="faq-a">{answer}</div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('general');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const active = faqCategories.find(c => c.id === activeTab);

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="faq-hero">
        <div className="wrap faq-hero-inner">
          <FadeIn>
            <div className="eyebrow center">Patient Information</div>
            <h1 className="sh text-center">Frequently Asked <em>Questions</em></h1>
            <div className="gd center" />
            <p className="faq-hero-sub">
              Honest answers to the questions we hear most often. If your question isn't answered below, please book a consultation — we welcome detailed conversations about your individual circumstances.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="sec faq-sec">
        <div className="wrap">
          {/* Tab Nav */}
          <FadeIn>
            <div className="faq-tabs">
              {faqCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`faq-tab${activeTab === cat.id ? ' faq-tab--active' : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Questions */}
          <div className="faq-list">
            {active.questions.map((item, i) => (
              <FadeIn key={item.q} delay={i * 0.06}>
                <FAQItem question={item.q} answer={item.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Treatment */}
      <section className="tfaq-all-sec">
        <div className="wrap">
          <FadeIn>
            <div className="eyebrow center">Treatment-Specific FAQs</div>
            <h2 className="sh text-center">Questions by <em>Treatment</em></h2>
            <div className="gd center" />
            <p className="text-center" style={{ color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Each treatment has its own dedicated FAQ page with 8 detailed, treatment-specific questions and answers.
            </p>
            <div className="tfaq-all-grid">
              {Object.entries(treatmentFAQs).map(([slug, d]) => (
                <Link key={slug} to={`/faq/treatment/${slug}`} className="tfaq-all-card">
                  <span className="tfaq-all-name">{d.title}</span>
                  <span className="tfaq-all-count">{d.faqs.length} questions</span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Still have questions */}
      <section className="faq-still-sec">
        <div className="wrap faq-still-inner">
          <FadeIn>
            <div className="faq-still-content">
              <div className="eyebrow">Personal Guidance</div>
              <h2 className="sh">Still Have <em>Questions?</em></h2>
              <div className="gd" />
              <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Every patient's situation is unique. A private consultation with Dr Matla allows a thorough discussion of your specific concerns, medical history and the most appropriate treatment options for you.
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