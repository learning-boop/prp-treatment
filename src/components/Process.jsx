import { FadeIn } from '../hooks/useFadeIn';

const steps = [
  {
    num: '01',
    title: 'Consultation & Skin Analysis',
    body: 'A personalised consultation with Dr. Matla to assess skin quality, hair density, texture concerns, and treatment goals before creating your bespoke PRP treatment plan.',
    img: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&q=85',
  },
  {
    num: '02',
    title: 'Blood Collection',
    body: 'A small amount of blood is collected using sterile medical equipment, similar to a routine blood test. Quick, safe and comfortable.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=85',
  },
  {
    num: '03',
    title: 'PRP Separation',
    body: 'The blood sample is placed into a centrifuge system to isolate platelet-rich plasma containing concentrated regenerative growth factors.',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=85',
  },
  {
    num: '04',
    title: 'Precision PRP Application',
    body: 'The concentrated PRP is precisely administered through microinjections or microneedling to stimulate collagen production and natural tissue regeneration.',
    img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=85',
  },
];

export default function Process() {
  return (
    <section className="sec process" id="process">
      <div className="wrap">
        <FadeIn>
          <div className="eyebrow">THE SCIENCE</div>
          <h2 className="sh">How PRP <em>Works</em></h2>
          <div className="gd" />
          <p style={{ fontSize: '.82rem', color: 'var(--muted)', maxWidth: 520 }}>
            Platelet-Rich Plasma therapy uses your body's own regenerative growth factors to stimulate
            collagen production, improve skin quality, and support natural hair restoration.
          </p>
        </FadeIn>
      </div>

      <div className="proc-grid" style={{ marginTop: '3.5rem' }}>
        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.12} style={{ display: 'contents' }}>
            <div className="proc-item">
              <img src={s.img} alt={s.title} />
              <div className="proc-ov">
                <div className="proc-num">{s.num}</div>
                <div className="proc-title">{s.title}</div>
                <div className="proc-body">{s.body}</div>
              </div>
              {i < steps.length - 1 && <div className="proc-line" />}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
