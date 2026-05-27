import { useEffect } from 'react';
import { FadeIn } from '../hooks/useFadeIn';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const hairConditions = [
  {
    id: 'male-pattern-baldness',
    icon: '◈',
    title: 'Male Pattern Baldness',
    subtitle: 'Androgenetic Alopecia',
    desc: 'The most common form of hair loss in men, driven by genetic sensitivity to DHT (dihydrotestosterone). PRP can slow progression and support follicles that retain viability in early-to-mid stages.',
    signs: ['Receding hairline', 'Crown thinning', 'Gradual hair miniaturisation', 'Family history of baldness'],
    suitable: true,
  },
  {
    id: 'female-hair-thinning',
    icon: '◈',
    title: 'Female Hair Thinning',
    subtitle: 'Female Pattern Hair Loss',
    desc: 'Women experience hair thinning differently — typically as diffuse loss across the crown and parting. Hormonal changes, stress and nutritional deficiencies can all contribute. PRP protocols are specifically adapted for female hair loss patterns.',
    signs: ['Widening parting', 'Visible scalp at crown', 'Reduced ponytail volume', 'Hair feels finer'],
    suitable: true,
  },
  {
    id: 'stress-hair-loss',
    icon: '◈',
    title: 'Stress-Related Hair Loss',
    subtitle: 'Telogen Effluvium',
    desc: 'Physical or emotional stress can push hair follicles prematurely into the resting phase, causing widespread shedding weeks or months after the triggering event. PRP supports scalp recovery and re-entry into active growth phases.',
    signs: ['Sudden increased shedding', 'Noticeable thinning after stress', 'Hair loss 2–3 months post-illness', 'Handfuls on pillow or brush'],
    suitable: true,
  },
  {
    id: 'postpartum-hair-loss',
    icon: '◈',
    title: 'Postpartum Hair Shedding',
    subtitle: 'Hormonal Hair Loss',
    desc: 'Many women experience significant hair loss in the months following childbirth due to a drop in oestrogen. PRP can accelerate scalp recovery and support the return to normal hair density.',
    signs: ['Heavy shedding 2–6 months post-birth', 'Reduced density', 'Thinner texture than before pregnancy'],
    suitable: true,
  },
  {
    id: 'weak-hair-growth',
    icon: '◈',
    title: 'Weak Hair Growth',
    subtitle: 'Thin, Slow-Growing Hair',
    desc: 'When hair grows slowly, breaks easily or appears persistently thin despite good general health, PRP can improve the scalp environment and strengthen the hair growth cycle.',
    signs: ['Hair breaks easily', 'Slow growth rate', 'Persistent thinness', 'Scalp sensitivity'],
    suitable: true,
  },
];

const skinConditions = [
  {
    id: 'acne-scars',
    icon: '◈',
    title: 'Acne Scars',
    subtitle: 'Post-Inflammatory Scarring',
    desc: 'Acne scarring occurs when inflammation damages the dermis, leaving behind textural changes including ice-pick, rolling and boxcar scars. PRP combined with microneedling actively remodels scar tissue and stimulates collagen formation.',
    signs: ['Depressed scars', 'Uneven skin texture', 'Post-acne marks', 'Enlarged pores'],
    suitable: true,
  },
  {
    id: 'fine-lines-wrinkles',
    icon: '◈',
    title: 'Fine Lines & Wrinkles',
    subtitle: 'Intrinsic & Extrinsic Ageing',
    desc: 'Natural collagen loss from age 25 onwards leads to fine lines and wrinkles. PRP stimulates fibroblast activity, triggering new collagen and elastin production for a naturally smoother appearance.',
    signs: ['Fine lines at rest', 'Crepey skin texture', 'Loss of firmness', 'Deepening expression lines'],
    suitable: true,
  },
  {
    id: 'dull-skin',
    icon: '◈',
    title: 'Dull, Lacklustre Skin',
    subtitle: 'Reduced Skin Vitality',
    desc: 'Skin that appears tired, grey or flat often lacks adequate cell turnover and circulation. PRP growth factors improve microvascular supply and stimulate cellular renewal, restoring visible luminosity.',
    signs: ['Flat, grey complexion', 'Uneven skin tone', 'Lack of glow', 'Skin appears tired'],
    suitable: true,
  },
  {
    id: 'under-eye-darkness',
    icon: '◈',
    title: 'Under-Eye Darkness & Hollows',
    subtitle: 'Periorbital Concerns',
    desc: 'Dark circles under the eyes can result from skin thinning, pigmentation, poor circulation or volume loss. PRP improves skin thickness, tone and the appearance of the tear trough area gently and naturally.',
    signs: ['Dark under-eye shadows', 'Hollowed tear trough', 'Thin, translucent skin', 'Tired appearance'],
    suitable: true,
  },
  {
    id: 'uneven-skin-texture',
    icon: '◈',
    title: 'Uneven Skin Texture',
    subtitle: 'Rough & Irregular Surface',
    desc: 'Enlarged pores, rough patches and irregular texture are commonly addressed with PRP + microneedling. The treatment smooths the skin surface while improving underlying dermal quality.',
    signs: ['Visible pores', 'Rough skin feel', 'Bumpy skin surface', 'Irregular pigmentation'],
    suitable: true,
  },
  {
    id: 'sun-damaged-skin',
    icon: '◈',
    title: 'Sun-Damaged Skin',
    subtitle: 'Photoageing',
    desc: 'Chronic UV exposure degrades collagen, causes pigmentation and produces skin laxity. PRP stimulates repair mechanisms that counteract photoageing — improving texture, tone and firmness.',
    signs: ['Brown spots or patches', 'Leathery texture', 'Loss of elasticity', 'Uneven pigmentation'],
    suitable: true,
  },
  {
    id: 'skin-laxity',
    icon: '◈',
    title: 'Mild Skin Laxity',
    subtitle: 'Early Sagging & Loss of Definition',
    desc: 'Early loss of skin elasticity and subtle sagging — particularly around the jaw and neck — can be supported with PRP skin tightening protocols. Not a surgical alternative, but an effective regenerative support.',
    signs: ['Softening jaw definition', 'Crepey neck skin', 'Loss of facial contour', 'Reduced elasticity'],
    suitable: true,
  },
];

const unsuitable = [
  { title: 'Active skin infections', desc: 'Any active bacterial, viral or fungal infections at the treatment site.' },
  { title: 'Blood clotting disorders', desc: 'Conditions that affect platelet function or blood coagulation.' },
  { title: 'Pregnancy or breastfeeding', desc: 'PRP treatment is not recommended during pregnancy or while nursing.' },
  { title: 'Autoimmune conditions', desc: 'Certain autoimmune diagnoses may affect treatment suitability.' },
  { title: 'Low platelet count', desc: 'Thrombocytopenia or severely reduced platelet activity.' },
  { title: 'Active cancer treatment', desc: 'Chemotherapy or radiotherapy in progress.' },
];

function ConditionCard({ condition }) {
  return (
    <FadeIn>
      <div className="cond-card">
        <div className="cond-icon">{condition.icon}</div>
        <div className="cond-header">
          <h3 className="cond-title">{condition.title}</h3>
          <span className="cond-sub">{condition.subtitle}</span>
        </div>
        <p className="cond-desc">{condition.desc}</p>
        <div className="cond-signs-label">Common signs</div>
        <ul className="cond-signs">
          {condition.signs.map(s => <li key={s}>{s}</li>)}
        </ul>
        <a href="/#booking" className="cond-cta">
          <span>Discuss This Condition</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </FadeIn>
  );
}

export default function ConditionsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="cond-hero">
        <div className="wrap cond-hero-inner">
          <FadeIn>
            <div className="eyebrow center">Clinical Indications</div>
            <h1 className="sh text-center">Conditions We <em>Treat</em></h1>
            <div className="gd center" />
            <p className="cond-hero-sub">
              PRP therapy supports a range of hair and skin conditions. A thorough consultation helps determine whether you are a suitable candidate and which treatment protocol is most appropriate for your concern.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="cond-hero-links">
              <a href="#hair-conditions" className="btn-gold"><span>Hair Conditions</span></a>
              <a href="#skin-conditions" className="btn-ghost">Skin Conditions</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hair Conditions */}
      <section className="sec" id="hair-conditions">
        <div className="wrap">
          <FadeIn>
            <div className="eyebrow">Scalp & Hair</div>
            <h2 className="sh">Hair <em>Conditions</em></h2>
            <div className="gd" />
            <p className="cond-section-intro">
              Hair PRP is most effective when treatment begins early. The following conditions are commonly assessed during consultation with Dr Matla, with bespoke treatment plans developed based on severity and individual factors.
            </p>
          </FadeIn>
          <div className="cond-grid">
            {hairConditions.map(c => <ConditionCard key={c.id} condition={c} />)}
          </div>
        </div>
      </section>

      {/* Skin Conditions */}
      <section className="sec cond-skin-sec" id="skin-conditions">
        <div className="wrap">
          <FadeIn>
            <div className="eyebrow">Face & Skin</div>
            <h2 className="sh">Skin <em>Conditions</em></h2>
            <div className="gd" />
            <p className="cond-section-intro">
              PRP skin treatments are suitable for a broad range of concerns — from early anti-ageing to established scarring. Treatments are always assessed individually, with realistic outcomes discussed at consultation.
            </p>
          </FadeIn>
          <div className="cond-grid">
            {skinConditions.map(c => <ConditionCard key={c.id} condition={c} />)}
          </div>
        </div>
      </section>

      {/* Unsuitable */}
      <section className="sec cond-unsuitable-sec">
        <div className="wrap">
          <FadeIn>
            <div className="eyebrow center">Medical Contraindications</div>
            <h2 className="sh text-center">Who Should <em>Avoid</em> PRP?</h2>
            <div className="gd center" />
            <p className="text-center" style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
              PRP is not suitable for everyone. The following conditions may preclude treatment or require further medical assessment before proceeding. A full consultation is always required.
            </p>
          </FadeIn>
          <div className="unsuitable-grid">
            {unsuitable.map(u => (
              <FadeIn key={u.title}>
                <div className="unsuitable-card">
                  <div className="unsuitable-x">✕</div>
                  <div>
                    <div className="unsuitable-title">{u.title}</div>
                    <div className="unsuitable-desc">{u.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="cond-disclaimer">
              This list is not exhaustive. Dr Matla will conduct a comprehensive medical history review at your initial consultation to confirm suitability. Results may vary between individuals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="tx-cta-band">
        <div className="wrap text-center">
          <FadeIn>
            <div className="eyebrow center">Next Step</div>
            <h2 className="sh">Discuss Your <em>Condition</em></h2>
            <div className="gd center" />
            <p style={{ color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Every case is assessed individually. Book a private consultation with Dr Matla to discuss your concern, medical history and treatment options in confidence.
            </p>
            <a href="/#booking" className="btn-gold"><span>Book a Private Consultation</span></a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
