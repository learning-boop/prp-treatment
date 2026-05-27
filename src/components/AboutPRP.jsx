import { FadeIn } from '../hooks/useFadeIn';

const features = [
  { ico: '✦', t: '100% Natural', b: 'Uses your own blood plasma — no synthetic substances, no foreign materials.' },
  { ico: '✦', t: 'Zero Downtime', b: 'Return to your day immediately following treatment with no recovery period.' },
  { ico: '✦', t: 'Clinically Proven', b: 'Backed by extensive peer-reviewed research and clinical outcomes data.' },
  { ico: '✦', t: 'Long-Lasting', b: 'Results endure 12–18 months, maintained with a single annual top-up session.' },
];

export default function AboutPRP() {
  return (
    <section className="sec about-prp" id="treatment">
      <div className="wrap">
        <div className="prp-grid">
          <FadeIn>
            <div className="prp-img-wrap">
              <img
                className="prp-img"
                src="\assets\prp1.png"
                alt="PRP Treatment Process"
              />
              <div className="prp-img-deco" />
              <div className="prp-accent">
                <div className="prp-accent-n">98%</div>
                <div className="prp-accent-l">Client Satisfaction Rate</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="eyebrow">WHAT IS PRP THERAPY</div>
            <h2 className="sh">
              Regenerative<br />
              Medicine, <em>Redefined</em>
            </h2>
            <div className="gd" />
            <p className="ab-copy">
              Platelet-Rich Plasma (PRP) therapy harnesses the regenerative power of your own blood.
              By concentrating growth factors and bioactive proteins naturally present in your plasma,
              we stimulate your body's own healing response — restoring collagen, improving skin quality,
              and revitalising hair follicles from within.
            </p>
            <p className="ab-copy">
              Unlike synthetic treatments, PRP works in harmony with your biology. The result is a
              transformation that looks and feels entirely natural — because it is.
            </p>
            <div className="prp-features">
              {features.map((f, i) => (
                <div className="prp-feat" key={i}>
                  <div className="prp-feat-ico">{f.ico}</div>
                  <div className="prp-feat-t">{f.t}</div>
                  <div className="prp-feat-b">{f.b}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
