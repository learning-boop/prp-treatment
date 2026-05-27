import { FadeIn } from '../hooks/useFadeIn';

const services = [
  { img: '/assets/face.png', t: 'Facial Rejuvenation PRP', b: 'Fine lines, skin tone, luminosity — restored at the cellular level with precision growth factor delivery.', p: 'From £450' },
  { img: '/assets/face3.png', t: 'Skin Rejuvenation PRP', b: 'Full-face treatment to improve overall skin quality, texture and radiance from within.', p: 'From £420' },
  { img: '/assets/under-eye.png', t: 'Under Eye Revitalisation', b: 'Dark circles, hollowness, tiredness — visibly and beautifully refreshed.', p: 'From £380' },
  { img: '/assets/acne.png', t: 'Acne Scar Treatment PRP', b: 'Growth factors remodel scar tissue and rebuild a smooth, even skin surface.', p: 'From £490' },
  { img: '/assets/above-eye2.png', t: 'Periorbital Rejuvenation', b: 'Target fine lines, crepiness and pigmentation around the delicate eye area.', p: 'From £350' },
  { img: '/assets/neck.png', t: 'Neck & Décolletage Renewal', b: 'Tighten, brighten and restore the most delicate, exposed areas.', p: 'From £420' },
  { img: '/assets/hair.png', t: 'Hair Restoration PRP', b: 'Clinically proven to awaken dormant follicles and stimulate regrowth across the scalp.', p: 'From £500' },
  { img: '/assets/hair-trans2.png', t: 'Hair Transplant Enhancement', b: 'PRP applied post-transplant to accelerate graft survival and maximise density results.', p: 'From £550' },
  { img: '/assets/bald.png', t: 'Male Pattern Baldness PRP', b: 'Targeted scalp injections to slow progression and restore natural thickness.', p: 'From £480' },
  { img: '/assets/vampire.png', t: 'Vampire Facial®', b: 'PRP combined with microneedling for maximum collagen stimulus and absorption.', p: 'From £650' },
  { img: '/assets/co.png', t: 'PRP + Fractional CO₂ Laser', b: 'Laser resurfacing amplified with PRP for accelerated healing and superior skin renewal.', p: 'From £750' },
  { img: '/assets/fat.png', t: 'PRP + Fat Grafting (Lipofilling)', b: 'PRP enriches fat grafts to improve survival, integration and long-term volume retention.', p: 'From £900' },
];

export default function Services() {
  return (
    <section className="sec services" id="services">
      <div className="wrap">
        <FadeIn>
          <div className="text-center">
            <div className="eyebrow center">CURATED SERVICES</div>
            <h2 className="sh">Bespoke PRP <em>Treatments</em></h2>
            <div className="gd center" />
          </div>
        </FadeIn>

        <div className="serv-grid">
          {services.map((s, i) => (
            <FadeIn key={s.t} delay={(i % 3) * 0.12} style={{ display: 'contents' }}>
              <div className="sv">
                <div className="sv-img-wrap">
                  <img className="sv-img" src={s.img} alt={s.t} />
                </div>
                <div className="sv-body">
                  <span className="sv-sym">✦</span>
                  <div className="sv-t">{s.t}</div>
                  <p className="sv-b">{s.b}</p>
                  <div className="sv-p">{s.p}</div>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Wide card */}
          <FadeIn style={{ display: 'contents' }}>
            <div className="sv sv-wide">
              <div className="sv-img-wrap">
                <img className="sv-img" src="/assets/wound.png" alt="Post Surgical PRP" />
              </div>
              <div className="sv-body" style={{ justifyContent: 'center' }}>
                <span className="sv-sym">✦</span>
                <div className="sv-t">Wound Healing &amp; Post-Surgical PRP</div>
                <p className="sv-b">Accelerate recovery and tissue remodelling after surgical or cosmetic procedures with targeted PRP application.</p>
                <div className="sv-p">From £320</div>
              </div>
            </div>
          </FadeIn>

          {/* Featured full-width */}
          <FadeIn delay={0.36} style={{ display: 'contents' }}>
            <div className="sv featured sv-featured-full">
              <div className="sv-img-wrap">
                <img className="sv-img" src="https://drmatla.com/wp-content/uploads/2021/09/DRMATLACLINICSHOTS-1.jpg" alt="Total Renewal Programme" />
              </div>
              <div className="sv-body">
                <span className="sv-sym" style={{ fontSize: '2rem' }}>♛</span>
                <div className="sv-t">Total Renewal Programme</div>
                <p className="sv-b">A bespoke 3–6 session journey combining facial, hair and body PRP therapies under Dr. Matla's personal, direct care. The definitive regenerative experience.</p>
                <div className="sv-p">From £1,800</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
