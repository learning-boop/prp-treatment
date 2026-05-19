import { useEffect, useRef, useState, useCallback } from 'react';

const SLIDES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=88',
    alt: 'Woman radiant glowing skin portrait',
    label: 'PRP Facial Rejuvenation',
  },
  {
    id: 2,
    src: 'assets/back.png',
    alt: 'Woman clear luminous skin close-up',
    label: 'Skin Radiance Treatment',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=88',
    alt: 'Elegant woman aesthetic portrait',
    label: 'Regenerative Aesthetics',
  },
];

const DURATION = 4500;

export default function Hero() {
  const bgRef       = useRef(null);
  const timerRef    = useRef(null);
  const startRef    = useRef(null);
  const rafRef      = useRef(null);
  const progressRef = useRef(null);

  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile]   = useState(false);

  /* ── detect mobile ── */
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  /* ── parallax (desktop only) ── */
  useEffect(() => {
    if (isMobile) return;
    const handler = () => {
      if (bgRef.current) {
        bgRef.current.style.transform =
          `scale(1.06) translateY(${window.scrollY * 0.04}px)`;
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [isMobile]);

  /* ── carousel logic ── */
  const goTo = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 800);
  }, [animating]);

  const next = useCallback(() => {
    setCurrent(prev => {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 800);
      return (prev + 1) % SLIDES.length;
    });
  }, []);

  /* ── progress bar + auto-advance ── */
  const startProgress = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);
    startRef.current = performance.now();

    const tick = (ts) => {
      if (!startRef.current) return;
      const pct = Math.min(((ts - startRef.current) / DURATION) * 100, 100);
      if (progressRef.current) progressRef.current.style.width = pct + '%';
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        next();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [next]);

  useEffect(() => {
    startProgress();
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
    };
  }, [current, startProgress]);

  const handleDot = (idx) => {
    if (idx === current || animating) return;
    goTo(idx);
  };

  return (
    <>
      <style>{`
        @keyframes sweep {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes scrollDrop {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50%       { transform: scaleY(1); transform-origin: top; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-tag   { animation: fadeUp 0.8s ease 0.2s both; }
        .hero-h1    { animation: fadeUp 0.8s ease 0.4s both; }
        .hero-rule  { animation: fadeUp 0.8s ease 0.5s both; }
        .hero-desc  { animation: fadeUp 0.8s ease 0.6s both; }
        .hero-btns  { animation: fadeUp 0.8s ease 0.7s both; }
        .hero-trust { animation: fadeUp 0.8s ease 0.8s both; }
        .btn-gold-el:hover  { background: #b8962e !important; }
        .btn-ghost-el:hover { background: rgba(255,255,255,0.08) !important; }

        /* ── RESPONSIVE HERO ── */
        #hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 640px;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: #0d0d0d;
        }

        /* ── Carousel: desktop = right 44%, mobile = full bleed behind content ── */
        #hero-carousel {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 44%;
          z-index: 5;
          overflow: hidden;
        }

        /* ── Content wrapper ── */
        #hero-content-wrap {
          position: relative;
          z-index: 10;
          width: 100%;
          display: flex;
          align-items: center;
          padding-left: 6%;
          padding-right: 6%;
        }

        #hero-content {
          max-width: 540px;
          width: 100%;
        }

        /* Vertical divider line between content and carousel */
        #hero-vr {
          position: absolute;
          left: 58%;
          top: 10%;
          bottom: 10%;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(201,168,76,0.15) 30%, rgba(201,168,76,0.15) 70%, transparent);
          z-index: 4;
        }

        /* Trust pills row */
        #hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* Buttons row */
        #hero-btns {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        /* Scroll indicator */
        #hero-scroll-ind {
          position: absolute;
          bottom: 32px;
          left: 6%;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        /* ── MOBILE overrides (≤768px) ── */
        @media (max-width: 768px) {
          #hero-section {
            height: 100svh;
            min-height: 600px;
            align-items: flex-end;
          }

          /* Carousel becomes full-bleed background on mobile */
          #hero-carousel {
            width: 100%;
            left: 0;
            z-index: 2;
          }

          /* Hide desktop-only divider */
          #hero-vr { display: none; }

          /* Extra dark gradient so text is readable over full-bleed image */
          #hero-mob-overlay {
            display: block !important;
          }

          #hero-content-wrap {
            padding-left: 5%;
            padding-right: 5%;
            padding-bottom: 80px;
            align-items: flex-end;
          }

          #hero-content {
            max-width: 100%;
          }

          /* Slightly smaller heading on small screens */
          #hero-heading {
            font-size: clamp(30px, 8vw, 52px) !important;
            margin-bottom: 14px !important;
          }

          #hero-desc {
            font-size: 13px !important;
            margin-bottom: 22px !important;
            max-width: 100% !important;
          }

          #hero-btns {
            gap: 10px;
            margin-bottom: 20px;
          }

          /* Stack buttons on very small screens */
          @media (max-width: 380px) {
            #hero-btns { flex-direction: column; align-items: flex-start; }
          }

          /* Panel left-fade not needed — use top fade instead */
          #hero-panel-fade-left { display: none !important; }

          /* Slide label and dots: reposition for mobile */
          #hero-slide-label {
            bottom: 16px !important;
            left: 16px !important;
          }

          #hero-dots {
            width: 24px !important;
          }

          /* Scroll indicator hidden on mobile to save space */
          #hero-scroll-ind { display: none; }

          /* Progress bar full width on mobile */
          #hero-progress-track {
            right: 24px !important;
          }
        }

        /* ── Small mobile (≤480px) ── */
        @media (max-width: 480px) {
          #hero-heading {
            font-size: clamp(26px, 9vw, 40px) !important;
          }
          #hero-trust { gap: 6px; }
          .trust-pill {
            font-size: 8px !important;
            padding: 4px 9px !important;
          }
          .btn-gold-el {
            padding: 12px 20px !important;
            font-size: 10px !important;
          }
          .btn-ghost-el {
            padding: 12px 18px !important;
            font-size: 10px !important;
          }
        }
      `}</style>

      <section id="hero-section">

        {/* ── Background ── */}
        <div style={s.bgWrap}>
          <img
            ref={bgRef}
            src="https://drmatla.com/wp-content/uploads/2021/09/DRMATLACLINICSHOTS-4.jpg"
            alt="Luxury clinic interior"
            style={s.bgImg}
          />
        </div>

        {/* Gradient overlays */}
        <div style={s.gradLeft} />
        <div style={s.gradTop} />
        <div style={s.noise} />
        <div style={s.scanlines} />
        <div style={s.sweep} />
        <div id="hero-vr" />

        {/* Mobile-only extra darkening overlay (hidden on desktop via CSS) */}
        <div
          id="hero-mob-overlay"
          style={{
            display: 'none',
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0.92) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Carousel Panel ── */}
        <div id="hero-carousel">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              style={{
                ...s.slide,
                opacity:   i === current ? 1 : 0,
                transform: i === current ? 'scale(1)' : 'scale(1.04)',
                zIndex:    i === current ? 2 : 1,
              }}
            >
              <img src={slide.src} alt={slide.alt} style={s.slideImg} />
              <div style={s.slideShade} />
            </div>
          ))}

          <div id="hero-panel-fade-left" style={s.panelFadeLeft} />
          <div style={s.panelVignette} />

          {/* Treatment label */}
          <div id="hero-slide-label" style={s.slideLabel}>
            <div style={s.slideLabelLine} />
            <span style={s.slideLabelText}>{SLIDES[current].label}</span>
          </div>

          {/* Dot navigation */}
          <div id="hero-dots" style={s.dots}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDot(i)}
                style={{ ...s.dot, ...(i === current ? s.dotActive : {}) }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div id="hero-progress-track" style={s.progressTrack}>
            <div ref={progressRef} style={s.progressFill} />
          </div>

          <div style={s.panelRim} />
        </div>

        {/* ── Hero Content ── */}
        <div id="hero-content-wrap">
          <div id="hero-content">

            <div className="hero-tag" style={s.tag} />

            <h1
              id="hero-heading"
              className="hero-h1"
              style={s.heading}
            >
              Restore<br />
              Luminosity,<br />
              <em style={s.headingEm}>Confidence &amp; Elegance.</em>
            </h1>

            <div className="hero-rule" style={s.rule} />

            <p id="hero-desc" className="hero-desc" style={s.desc}>
              Bespoke regenerative PRP treatments designed to restore radiance, refine
              skin quality and rejuvenate naturally through advanced aesthetic medicine.
            </p>

            <div id="hero-btns" className="hero-btns">
              <a href="#booking" className="btn-gold-el hero-btns" style={s.btnGold}>
                <span>Reserve Consultation</span>
                <span style={s.btnArrow}>→</span>
              </a>
              <a href="#results" className="btn-ghost-el" style={s.btnGhost}>
                Explore Results
              </a>
            </div>

            <div id="hero-trust" className="hero-trust">
              {['GMC Registered', 'Harley Street', '15+ Years', 'Regenerative Aesthetics'].map(t => (
                <span key={t} className="trust-pill" style={s.trustPill}>{t}</span>
              ))}
            </div>

          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div id="hero-scroll-ind">
          <span style={s.scrollText}>SCROLL</span>
          <div style={s.scrollBar}>
            <div style={s.scrollBarFill} />
          </div>
        </div>

      </section>
    </>
  );
}

/* ─────────────────────────────────────────
   Styles
───────────────────────────────────────── */
const gold    = '#c9a84c';
const goldDim = 'rgba(201,168,76,0.15)';

const s = {
  bgWrap: {
    position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
  },
  bgImg: {
    width: '100%', height: '100%', objectFit: 'cover',
    transform: 'scale(1.06)', willChange: 'transform',
    filter: 'brightness(0.35) saturate(0.7)',
  },
  gradLeft: {
    position: 'absolute', inset: 0, zIndex: 1,
    background: 'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 55%, transparent 100%)',
  },
  gradTop: {
    position: 'absolute', inset: 0, zIndex: 1,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)',
  },
  noise: {
    position: 'absolute', inset: 0, zIndex: 2, opacity: 0.04,
    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
    backgroundSize: '256px',
  },
  scanlines: {
    position: 'absolute', inset: 0, zIndex: 2,
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
    pointerEvents: 'none',
  },
  sweep: {
    position: 'absolute', inset: 0, zIndex: 3,
    background: 'linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.03) 50%, transparent 60%)',
    animation: 'sweep 8s linear infinite',
    pointerEvents: 'none',
  },

  /* Carousel */
  slide: {
    position: 'absolute', inset: 0,
    transition: 'opacity 0.85s ease, transform 0.85s ease',
  },
  slideImg: {
    width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top',
  },
  slideShade: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.5) 100%)',
  },
  panelFadeLeft: {
    position: 'absolute', left: 0, top: 0, bottom: 0, width: '35%',
    background: 'linear-gradient(90deg, #0d0d0d 0%, transparent 100%)',
    zIndex: 10, pointerEvents: 'none',
  },
  panelVignette: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.45) 100%)',
    zIndex: 10, pointerEvents: 'none',
  },
  panelRim: {
    position: 'absolute', left: 0, top: '15%', bottom: '15%', width: 1,
    background: `linear-gradient(180deg, transparent, ${gold} 30%, ${gold} 70%, transparent)`,
    zIndex: 20, opacity: 0.5,
  },

  slideLabel: {
    position: 'absolute', bottom: 28, left: 24, right: 44,
    zIndex: 20, display: 'flex', alignItems: 'center', gap: 10,
  },
  slideLabelLine: { width: 24, height: 1, background: gold, flexShrink: 0 },
  slideLabelText: {
    fontFamily: '"Courier New", monospace', fontSize: 10,
    letterSpacing: '2px', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase',
  },

  dots: {
    position: 'absolute', right: 0, top: 0, bottom: 0, width: 32,
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    gap: 10, zIndex: 25, background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(4px)',
  },
  dot: {
    width: 3, height: 18, borderRadius: 2,
    background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', padding: 0,
    transition: 'all 0.3s ease',
  },
  dotActive: { height: 30, background: gold },

  progressTrack: {
    position: 'absolute', bottom: 0, left: 0, right: 32, height: 2,
    background: 'rgba(255,255,255,0.08)', zIndex: 25,
  },
  progressFill: { height: '100%', width: '0%', background: gold, transition: 'none' },

  /* Content */
  tag: {
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: '"Courier New", monospace', fontSize: 10,
    letterSpacing: '2.5px', color: gold, marginBottom: 20,
  },
  heading: {
    fontFamily: '"Georgia", "Times New Roman", serif',
    fontSize: 'clamp(38px, 5vw, 68px)',
    fontWeight: 400, color: '#fff', lineHeight: 1.1,
    letterSpacing: '-0.5px', marginBottom: 20,
  },
  headingEm: { fontStyle: 'italic', color: gold },
  rule: { width: 48, height: 1.5, background: gold, marginBottom: 20 },
  desc: {
    fontFamily: '"Georgia", serif', fontSize: 15,
    color: 'rgba(255,255,255,0.55)', lineHeight: 1.75,
    maxWidth: 400, marginBottom: 32,
  },
  btnGold: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    background: gold, color: '#000',
    fontFamily: '"Courier New", monospace', fontSize: 11, fontWeight: 700,
    letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none',
    padding: '14px 28px', borderRadius: 2, transition: 'background 0.2s ease',
  },
  btnArrow: { fontSize: 16, lineHeight: 1 },
  btnGhost: {
    display: 'inline-block',
    fontFamily: '"Courier New", monospace', fontSize: 11,
    letterSpacing: '1.5px', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
    padding: '14px 24px', border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: 2, transition: 'background 0.2s ease',
  },
  trustPill: {
    fontFamily: '"Courier New", monospace', fontSize: 9,
    letterSpacing: '1.5px', color: 'rgba(255,255,255,0.4)',
    border: '0.5px solid rgba(255,255,255,0.15)',
    padding: '5px 12px', borderRadius: 20,
  },

  scrollText: {
    fontFamily: '"Courier New", monospace', fontSize: 9,
    letterSpacing: '3px', color: 'rgba(255,255,255,0.3)',
  },
  scrollBar: { width: 1, height: 48, background: 'rgba(255,255,255,0.15)', overflow: 'hidden' },
  scrollBarFill: {
    width: '100%', height: '40%', background: gold,
    animation: 'scrollDrop 2s ease-in-out infinite',
  },
};