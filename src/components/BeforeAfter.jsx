import { useRef, useState } from 'react';
import { FadeIn } from '../hooks/useFadeIn';

const cards = [
  {
    before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=420&q=88',
    after: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=420&q=88',
    title: 'Facial Rejuvenation',
    sub: '3 Sessions · 6 Weeks Apart',
  },
  {
    before: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=420&q=88',
    after: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=420&q=88',
    title: 'Hair Restoration',
    sub: '4 Sessions · Monthly',
  },
  {
    before: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=420&q=88',
    after: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=420&q=88',
    title: 'Under Eye Revitalisation',
    sub: '2 Sessions · 4 Weeks Apart',
  },
  {
    before: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=420&q=88',
    after: 'https://images.unsplash.com/photo-1574154894072-16736a4d6d23?w=420&q=88',
    title: 'Vampire Facial®',
    sub: 'PRP + Microneedling · 1 Session',
  },
];

const resultCards = [
  { ico: '✦', t: 'Visible from Week 3', b: 'Collagen stimulation begins immediately. Clients notice a natural glow within the first weeks.' },
  { ico: '✦', t: 'Peak Results at 6 Weeks', b: "The full transformation deepens as your body's own regeneration continues working beneath the surface." },
  { ico: '✦', t: 'Lasting 12–18 Months', b: 'Results endure far longer than most aesthetic treatments. Maintained with an annual top-up session.' },
];

export default function BeforeAfter() {
  const trackRef = useRef(null);
  const [cur, setCur] = useState(0);

  const cardW = () => {
    const cards = trackRef.current?.querySelectorAll('.ba-card');
    if (!cards?.length) return 530 + 32;
    return cards[0].getBoundingClientRect().width + 32;
  };

  const go = (idx) => {
    const next = Math.max(0, Math.min(cards.length - 1, idx));
    setCur(next);
    trackRef.current?.scrollTo({ left: next * cardW(), behavior: 'smooth' });
  };

  return (
    <section className="ba" id="results">
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
          <FadeIn>
            <div className="eyebrow">REAL RESULTS</div>
            <h2 className="sh">Before &amp; <em>After</em></h2>
            <div className="gd" />
            <p style={{ fontSize: '.8rem', color: 'var(--muted)', maxWidth: 400 }}>
              Every image shared with full patient consent. Real patients. No filters. No retouching.
            </p>
          </FadeIn>
          <div className="ba-nav">
            <button className="ba-arrow" onClick={() => go(cur - 1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="ba-arrow" onClick={() => go(cur + 1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="ba-track-wrap">
          <div className="ba-track" ref={trackRef}>
            {cards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.12} style={{ display: 'contents' }}>
                <div className="ba-card">
                  <div className="ba-images">
                    <div className="ba-side bef">
                      <img src={card.before} alt={`Before ${card.title}`} />
                      <span className="ba-badge bef">BEFORE</span>
                    </div>
                    <div className="ba-side aft">
                      <img src={card.after} alt={`After ${card.title}`} />
                      <span className="ba-badge aft">AFTER</span>
                    </div>
                    <div className="ba-diamond">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M8 12h8M12 8l4 4-4 4"/></svg>
                    </div>
                  </div>
                  <div className="ba-cap">
                    <div>
                      <div className="ba-cap-t">{card.title}</div>
                      <div className="ba-cap-n">{card.sub}</div>
                    </div>
                    <div className="ba-cap-tag">PRP Therapy</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="ba-dots">
          {cards.map((_, i) => (
            <button key={i} className={`ba-dot${cur === i ? ' on' : ''}`} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>

        <div className="result-cards">
          {resultCards.map((r, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="rc">
                <div className="rc-ico">{r.ico}</div>
                <div className="rc-t">{r.t}</div>
                <p className="rc-b">{r.b}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
