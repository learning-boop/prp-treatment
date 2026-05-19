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
  const bgRef        = useRef(null);
  const timerRef     = useRef(null);
  const startRef     = useRef(null);
  const rafRef       = useRef(null);
  const progressRef  = useRef(null);

  const [current, setCurrent]   = useState(0);
  const [animating, setAnimating] = useState(false);

  /* ── parallax ── */
  useEffect(() => {
    const handler = () => {
      if (bgRef.current) {
        bgRef.current.style.transform =
          `scale(1.06) translateY(${window.scrollY * 0.04}px)`;
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* ── carousel logic ── */
  const goTo = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 800);
  }, [animating]);

  const next = useCallback(() => {
    setCurrent(prev => {
      const nxt = (prev + 1) % SLIDES.length;
      setAnimating(true);
      setTimeout(() => setAnimating(false), 800);
      return nxt;
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
    <section style={styles.section} id="home">

      {/* ── Background ── */}
      <div style={styles.bgWrap}>
        <img
          ref={bgRef}
          src="https://drmatla.com/wp-content/uploads/2021/09/DRMATLACLINICSHOTS-4.jpg"
          alt="Luxury clinic interior"
          style={styles.bgImg}
        />
      </div>

      {/* Gradient overlays */}
      <div style={styles.gradLeft} />
      <div style={styles.gradTop} />
      <div style={styles.noise} />
      <div style={styles.scanlines} />
      <div style={styles.sweep} />
      <div style={styles.vrLine} />

      {/* ── Carousel Panel (right) ── */}
      <div style={styles.carouselWrap}>

        {/* Slides */}
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            style={{
              ...styles.slide,
              opacity:    i === current ? 1 : 0,
              transform:  i === current ? 'scale(1)' : 'scale(1.04)',
              zIndex:     i === current ? 2 : 1,
            }}
          >
            <img src={slide.src} alt={slide.alt} style={styles.slideImg} />
            <div style={styles.slideShade} />
          </div>
        ))}

        {/* Left fade so carousel blends into content */}
        <div style={styles.panelFadeLeft} />
        {/* Top / bottom vignette */}
        <div style={styles.panelVignette} />

        {/* Slide counter */}
        {/* <div style={styles.counter}>
          <span style={styles.counterCurrent}>
            {String(current + 1).padStart(2, '0')}
          </span>
          <span style={styles.counterSep}>/</span>
          <span style={styles.counterTotal}>
            {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div> */}

        {/* Treatment label */}
        <div style={styles.slideLabel}>
          <div style={styles.slideLabelLine} />
          <span style={styles.slideLabelText}>{SLIDES[current].label}</span>
        </div>

        {/* Vertical dot navigation */}
        <div style={styles.dots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              style={{
                ...styles.dot,
                ...(i === current ? styles.dotActive : {}),
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div style={styles.progressTrack}>
          <div ref={progressRef} style={styles.progressFill} />
        </div>

        {/* Gold rim on left edge */}
        <div style={styles.panelRim} />
      </div>

      {/* ── Hero Content ── */}
      <div style={styles.contentWrap}>
        <div style={styles.content}>

          <div style={styles.tag}>
            
          </div>

          <h1 style={styles.heading}>
            Restore<br />
            Luminosity,<br />
            <em style={styles.headingEm}>Confidence &amp; Elegance.</em>
          </h1>

          <div style={styles.rule} />

          <p style={styles.desc}>
            Bespoke regenerative PRP treatments designed to restore radiance, refine
            skin quality and rejuvenate naturally through advanced aesthetic medicine.
          </p>

          <div style={styles.btns}>
            <a href="#booking" style={styles.btnGold}>
              <span>Reserve Consultation</span>
              <span style={styles.btnArrow}>→</span>
            </a>
            <a href="#results" style={styles.btnGhost}>Explore Results</a>
          </div>

          <div style={styles.trust}>
            {['GMC Registered', 'Harley Street', '15+ Years', 'Regenerative Aesthetics'].map(t => (
              <span key={t} style={styles.trustPill}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div style={styles.scrollInd}>
        <span style={styles.scrollText}>SCROLL</span>
        <div style={styles.scrollBar}>
          <div style={styles.scrollBarFill} />
        </div>
      </div>

      {/* Inline styles for keyframe animations */}
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
        .hero-tag    { animation: fadeUp 0.8s ease 0.2s both; }
        .hero-h1     { animation: fadeUp 0.8s ease 0.4s both; }
        .hero-rule   { animation: fadeUp 0.8s ease 0.5s both; }
        .hero-desc   { animation: fadeUp 0.8s ease 0.6s both; }
        .hero-btns   { animation: fadeUp 0.8s ease 0.7s both; }
        .hero-trust  { animation: fadeUp 0.8s ease 0.8s both; }
        .btn-gold-el:hover { background: #b8962e !important; }
        .btn-ghost-el:hover { background: rgba(255,255,255,0.08) !important; }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────
   Styles object
───────────────────────────────────────── */
const gold = '#c9a84c';
const goldDim = 'rgba(201,168,76,0.15)';

const styles = {
  section: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: 640,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    background: '#0d0d0d',
  },

  /* Background */
  bgWrap: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    overflow: 'hidden',
  },
  bgImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'scale(1.06)',
    willChange: 'transform',
    filter: 'brightness(0.35) saturate(0.7)',
  },

  /* Overlays */
  gradLeft: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    background:
      'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 55%, transparent 100%)',
  },
  gradTop: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)',
  },
  noise: {
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    opacity: 0.04,
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
    backgroundSize: '256px',
  },
  scanlines: {
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    backgroundImage:
      'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
    pointerEvents: 'none',
  },
  sweep: {
    position: 'absolute',
    inset: 0,
    zIndex: 3,
    background:
      'linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.03) 50%, transparent 60%)',
    animation: 'sweep 8s linear infinite',
    pointerEvents: 'none',
  },
  vrLine: {
    position: 'absolute',
    left: '58%',
    top: '10%',
    bottom: '10%',
    width: 1,
    background: `linear-gradient(180deg, transparent, ${goldDim} 30%, ${goldDim} 70%, transparent)`,
    zIndex: 4,
  },

  /* ── CAROUSEL PANEL ── */
  carouselWrap: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '44%',
    zIndex: 5,
    overflow: 'hidden',
  },
  slide: {
    position: 'absolute',
    inset: 0,
    transition: 'opacity 0.85s ease, transform 0.85s ease',
  },
  slideImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },
  slideShade: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.5) 100%)',
  },
  panelFadeLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '35%',
    background: 'linear-gradient(90deg, #0d0d0d 0%, transparent 100%)',
    zIndex: 10,
    pointerEvents: 'none',
  },
  panelVignette: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.45) 100%)',
    zIndex: 10,
    pointerEvents: 'none',
  },
  panelRim: {
    position: 'absolute',
    left: 0,
    top: '15%',
    bottom: '15%',
    width: 1,
    background: `linear-gradient(180deg, transparent, ${gold} 30%, ${gold} 70%, transparent)`,
    zIndex: 20,
    opacity: 0.5,
  },

  /* Counter */
  counter: {
    position: 'absolute',
    top: 28,
    left: 24,
    zIndex: 20,
    display: 'flex',
    alignItems: 'baseline',
    gap: 4,
  },
  counterCurrent: {
    fontFamily: '"Courier New", monospace',
    fontSize: 28,
    fontWeight: 700,
    color: gold,
    lineHeight: 1,
  },
  counterSep: {
    fontFamily: '"Courier New", monospace',
    fontSize: 12,
    color: 'rgba(255,255,255,0.3)',
  },
  counterTotal: {
    fontFamily: '"Courier New", monospace',
    fontSize: 12,
    color: 'rgba(255,255,255,0.3)',
  },

  /* Label */
  slideLabel: {
    position: 'absolute',
    bottom: 28,
    left: 24,
    right: 44,
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  slideLabelLine: {
    width: 24,
    height: 1,
    background: gold,
    flexShrink: 0,
  },
  slideLabelText: {
    fontFamily: '"Courier New", monospace',
    fontSize: 10,
    letterSpacing: '2px',
    color: 'rgba(255,255,255,0.55)',
    textTransform: 'uppercase',
  },

  /* Dots */
  dots: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    zIndex: 25,
    background: 'rgba(0,0,0,0.25)',
    backdropFilter: 'blur(4px)',
  },
  dot: {
    width: 3,
    height: 18,
    borderRadius: 2,
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'all 0.3s ease',
  },
  dotActive: {
    height: 30,
    background: gold,
  },

  /* Progress */
  progressTrack: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 32,
    height: 2,
    background: 'rgba(255,255,255,0.08)',
    zIndex: 25,
  },
  progressFill: {
    height: '100%',
    width: '0%',
    background: gold,
    transition: 'none',
  },

  /* ── CONTENT ── */
  contentWrap: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '6%',
  },
  content: {
    maxWidth: 540,
  },

  tag: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: '"Courier New", monospace',
    fontSize: 10,
    letterSpacing: '2.5px',
    color: gold,
    marginBottom: 20,
    className: 'hero-tag',
  },
  tagDot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    background: gold,
    flexShrink: 0,
  },

  heading: {
    fontFamily: '"Georgia", "Times New Roman", serif',
    fontSize: 'clamp(38px, 5vw, 68px)',
    fontWeight: 400,
    color: '#fff',
    lineHeight: 1.1,
    letterSpacing: '-0.5px',
    marginBottom: 20,
  },
  headingEm: {
    fontStyle: 'italic',
    color: gold,
  },

  rule: {
    width: 48,
    height: 1.5,
    background: gold,
    marginBottom: 20,
  },

  desc: {
    fontFamily: '"Georgia", serif',
    fontSize: 15,
    color: 'rgba(255,255,255,0.55)',
    lineHeight: 1.75,
    maxWidth: 400,
    marginBottom: 32,
  },

  btns: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 28,
  },
  btnGold: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: gold,
    color: '#000',
    fontFamily: '"Courier New", monospace',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '14px 28px',
    borderRadius: 2,
    transition: 'background 0.2s ease',
    className: 'btn-gold-el',
  },
  btnArrow: {
    fontSize: 16,
    lineHeight: 1,
  },
  btnGhost: {
    display: 'inline-block',
    fontFamily: '"Courier New", monospace',
    fontSize: 11,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    padding: '14px 24px',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: 2,
    transition: 'background 0.2s ease',
    className: 'btn-ghost-el',
  },

  trust: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  trustPill: {
    fontFamily: '"Courier New", monospace',
    fontSize: 9,
    letterSpacing: '1.5px',
    color: 'rgba(255,255,255,0.4)',
    border: '0.5px solid rgba(255,255,255,0.15)',
    padding: '5px 12px',
    borderRadius: 20,
  },

  /* ── SCROLL INDICATOR ── */
  scrollInd: {
    position: 'absolute',
    bottom: 32,
    left: '6%',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
  },
  scrollText: {
    fontFamily: '"Courier New", monospace',
    fontSize: 9,
    letterSpacing: '3px',
    color: 'rgba(255,255,255,0.3)',
  },
  scrollBar: {
    width: 1,
    height: 48,
    background: 'rgba(255,255,255,0.15)',
    overflow: 'hidden',
  },
  scrollBarFill: {
    width: '100%',
    height: '40%',
    background: gold,
    animation: 'scrollDrop 2s ease-in-out infinite',
  },
};