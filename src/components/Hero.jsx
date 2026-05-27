import { useEffect, useRef, useState, useCallback } from 'react';

/* ─── Treatment data ─── */
const TREATMENTS = [
  {
    id: 1,
    slug: 'FACIAL',
    title: ['Restore', 'Radiant', 'Skin.'],
    sub: 'PRP Facial Rejuvenation',
    desc: 'Harness your body\'s own growth factors to resurface, tighten and illuminate skin at a cellular level.',
    img: '/assets/hero1.png',
    stat: ['92%', 'See visible results after a single session'],
  },
  {
    id: 2,
    slug: 'HAIR',
    title: ['Revive', 'Every', 'Follicle.'],
    sub: 'PRP Hair Restoration',
    desc: 'Clinically proven platelet injections reawaken dormant follicles and halt progressive hair loss naturally.',
    img: '/assets/hero2.png',
    stat: ['3×', 'Increase in hair density within 6 months'],
  },
  {
    id: 3,
    slug: 'SKIN',
    title: ['Renew,', 'Refine,', 'Reveal.'],
    sub: 'Advanced Skin Therapy',
    desc: 'Multi-layer bioregenerative protocols targeting fine lines, texture, and deep dermal renewal.',
    img: '/assets/hero3.png',
    stat: ['15+', 'Years of regenerative medicine mastery'],
  },
];

/* ─── Consultation Modal ─── */
function ConsultModal({ open, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'mOverlayIn 0.35s ease both',
      }}
    >
      <div style={{
        background: '#0a0a0a',
        border: '1px solid rgba(201,168,76,0.2)',
        width: '100%', maxWidth: 560,
        position: 'relative',
        animation: 'mPanelIn 0.4s cubic-bezier(0.22,1,0.36,1) both',
      }}>
        {/* Gold top bar */}
        <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #c9a84c 40%, #c9a84c 60%, transparent)' }} />

        {/* Header */}
        <div style={{ padding: '32px 36px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontFamily: '"Courier New", monospace', fontSize: 9, letterSpacing: '3px', color: '#c9a84c', textTransform: 'uppercase', marginBottom: 8 }}>
                Dr. Matla Clinic
              </p>
              <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 28, fontWeight: 300, color: '#fff', lineHeight: 1.15 }}>
                Reserve Your<br /><em style={{ color: '#c9a84c', fontStyle: 'italic' }}>Private Consultation</em>
              </h2>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none', border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
                width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, flexShrink: 0, marginLeft: 16,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Form */}
        <div style={{ padding: '28px 36px 36px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
            {[['Full Name', 'text', 'e.g. Sarah Johnson'], ['Phone Number', 'tel', '+44 7700 000000']].map(([label, type, ph]) => (
              <div key={label}>
                <label style={{ display: 'block', fontFamily: '"Courier New", monospace', fontSize: 8, letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: 8 }}>{label}</label>
                <input type={type} placeholder={ph} style={{
                  width: '100%', background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff', fontFamily: '"Cormorant Garamond", serif', fontSize: 15,
                  padding: '11px 14px', outline: 'none', boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            ))}
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: 'block', fontFamily: '"Courier New", monospace', fontSize: 8, letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: 8 }}>Email Address</label>
            <input type="email" placeholder="your@email.com" style={{
              width: '100%', background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff', fontFamily: '"Cormorant Garamond", serif', fontSize: 15,
              padding: '11px 14px', outline: 'none', boxSizing: 'border-box',
            }}
              onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: 'block', fontFamily: '"Courier New", monospace', fontSize: 8, letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: 8 }}>Treatment Interest</label>
            <select style={{
              width: '100%', background: '#111',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)', fontFamily: '"Cormorant Garamond", serif', fontSize: 15,
              padding: '11px 14px', outline: 'none', boxSizing: 'border-box', appearance: 'none', cursor: 'pointer',
            }}>
              <option value="">Select a treatment…</option>
              <option>PRP Facial Rejuvenation</option>
              <option>PRP Hair Restoration</option>
              <option>Advanced Skin Therapy</option>
              <option>Not sure — I need advice</option>
            </select>
          </div>
          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontFamily: '"Courier New", monospace', fontSize: 8, letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: 8 }}>Additional Notes</label>
            <textarea rows={3} placeholder="Tell us a little about your concerns…" style={{
              width: '100%', background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff', fontFamily: '"Cormorant Garamond", serif', fontSize: 15,
              padding: '11px 14px', outline: 'none', boxSizing: 'border-box',
              resize: 'none',
            }}
              onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          <button
            onClick={onClose}
            style={{
              width: '100%', background: '#c9a84c', color: '#000',
              border: 'none', cursor: 'pointer',
              fontFamily: '"Courier New", monospace', fontSize: 10, fontWeight: 700,
              letterSpacing: '2.5px', textTransform: 'uppercase',
              padding: '16px', transition: 'background 0.25s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#deba62'}
            onMouseLeave={e => e.currentTarget.style.background = '#c9a84c'}
          >
            Submit Consultation Request →
          </button>

          <p style={{ fontFamily: '"Courier New", monospace', fontSize: 8, letterSpacing: '1.5px', color: 'rgba(255,255,255,0.2)', textAlign: 'center', marginTop: 16, lineHeight: 1.6 }}>
            STRICTLY CONFIDENTIAL · GMC REGISTERED · HARLEY STREET CLINIC
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  const [active, setActive]       = useState(0);
  const [prev, setPrev]           = useState(null);
  const [transitioning, setTrans] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [revealed, setRevealed]   = useState(false);
  const [mousePos, setMousePos]   = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const rafRef    = useRef(null);
  const startRef  = useRef(null);
  const progRef   = useRef(null);
  const heroRef   = useRef(null);
  const particleId = useRef(0);
  const DURATION = 6000;

  /* Entry reveal */
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* Auto-advance */
  const goTo = useCallback((idx) => {
    if (transitioning) return;
    setTrans(true);
    setPrev(active);
    setActive(idx);
    setTimeout(() => { setPrev(null); setTrans(false); }, 900);
  }, [active, transitioning]);

  const next = useCallback(() => {
    goTo((active + 1) % TREATMENTS.length);
  }, [active, goTo]);

  const startProgress = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    startRef.current = performance.now();
    const tick = (ts) => {
      const pct = Math.min(((ts - startRef.current) / DURATION) * 100, 100);
      if (progRef.current) progRef.current.style.transform = `scaleX(${pct / 100})`;
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
      else next();
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [next]);

  useEffect(() => {
    startProgress();
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, startProgress]);

  /* Gold particle trail */
  useEffect(() => {
    let last = 0;
    const onMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
      const now = Date.now();
      if (now - last < 40) return;
      last = now;
      const id = particleId.current++;
      setParticles(p => [
        ...p.slice(-18),
        { id, x, y, born: now, vx: (Math.random() - 0.5) * 1.2, vy: -Math.random() * 1.5 - 0.5 },
      ]);
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', onMove);
    return () => el?.removeEventListener('mousemove', onMove);
  }, []);

  /* Animate particles */
  useEffect(() => {
    const raf = requestAnimationFrame(function tick() {
      setParticles(p =>
        p
          .map(pt => ({ ...pt, x: pt.x + pt.vx, y: pt.y + pt.vy }))
          .filter(pt => Date.now() - pt.born < 900)
      );
      requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const t = TREATMENTS[active];
  const titleWords = t.title;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        /* ── Modal animations ── */
        @keyframes mOverlayIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes mPanelIn   { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: none; } }

        /* ── Hero entry ── */
        @keyframes hReveal    { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        @keyframes hFade      { from { opacity: 0; } to { opacity: 1; } }
        @keyframes lineGrow   { from { width: 0; } to { width: 44px; } }
        @keyframes wordIn     { from { opacity: 0; transform: translateX(-16px) skewX(-4deg); } to { opacity: 1; transform: none; } }

        /* ── Image frame ── */
        @keyframes frameIn    { from { clip-path: inset(0 100% 0 0); opacity: 0; } to { clip-path: inset(0 0% 0 0); opacity: 1; } }
        @keyframes imgScale   { from { transform: scale(1.12); } to { transform: scale(1.0); } }

        /* ── Floating credential card ── */
        @keyframes cardFloat  { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        @keyframes cardIn     { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* ── Gold ring pulse ── */
        @keyframes ringPulse  { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.06; } 50% { transform: translate(-50%,-50%) scale(1.15); opacity: 0.12; } }

        /* ── Scroll worm ── */
        @keyframes worm       { 0% { top: 0; height: 0%; } 40% { top: 0; height: 100%; } 100% { top: 100%; height: 0%; } }

        /* ── Scanlines ── */
        @keyframes scanMove   { from { background-position: 0 0; } to { background-position: 0 4px; } }

        /* Button hover */
        .hero-cta-btn:hover   { background: #deba62 !important; transform: translateY(-2px) !important; box-shadow: 0 10px 32px rgba(201,168,76,0.3) !important; }
        .hero-outline-btn:hover { border-color: rgba(201,168,76,0.6) !important; color: #c9a84c !important; }

        /* Dot hover */
        .hero-dot:hover { background: rgba(201,168,76,0.4) !important; }

        #hero-root {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 680px;
          overflow: hidden;
          background: #060606;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* ── LEFT CONTENT COLUMN ── */
        #hero-left {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 5% 0 7%;
          padding-top: 90px;
        }

        /* ── RIGHT IMAGE COLUMN ── */
        #hero-right {
          position: relative;
          overflow: hidden;
        }

        /* ── Treatment selector tabs (bottom) ── */
        #hero-tabs {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 20;
          display: flex;
        }

        /* ── Floating credential card ── */
        #hero-card {
          position: absolute;
          left: -52px;
          bottom: 18%;
          z-index: 30;
          animation: cardFloat 4s ease-in-out infinite, cardIn 0.7s ease 1.4s both;
        }

        /* ── Big treatment number indicator ── */
        #hero-counter {
          position: absolute;
          top: 50%; right: 28px;
          transform: translateY(-50%);
          z-index: 25;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          #hero-root { grid-template-columns: 1fr; }
          #hero-right {
            position: absolute; inset: 0; z-index: 1;
          }
          #hero-left {
            position: relative; z-index: 10;
            padding: 110px 5% 100px;
            background: linear-gradient(180deg,
              rgba(6,6,6,0.7) 0%,
              rgba(6,6,6,0.3) 30%,
              rgba(6,6,6,0.75) 65%,
              rgba(6,6,6,0.97) 100%
            );
          }
          #hero-card { display: none; }
          #hero-counter { display: none; }
          #hero-title { font-size: clamp(36px,11vw,60px) !important; }
          #hero-scroll-ind { display: none; }
        }

        @media (max-width: 480px) {
          #hero-title { font-size: clamp(30px,12vw,50px) !important; }
          #hero-btns  { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      {/* ── MODAL ── */}
      <ConsultModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <section id="hero-root" ref={heroRef}>

        {/* ── Gold particle canvas (pointer-events:none) ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 50, pointerEvents: 'none', overflow: 'hidden' }}>
          {particles.map(pt => {
            const age = (Date.now() - pt.born) / 900;
            const opacity = (1 - age) * 0.75;
            const size = 3 + (1 - age) * 3;
            return (
              <div key={pt.id} style={{
                position: 'absolute',
                left: pt.x, top: pt.y,
                width: size, height: size,
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(201,168,76,${opacity}) 0%, transparent 70%)`,
                transform: 'translate(-50%,-50%)',
                pointerEvents: 'none',
              }} />
            );
          })}
        </div>

        {/* ════════════ LEFT ════════════ */}
        <div id="hero-left">

          {/* Ambient gold orb behind text */}
          <div style={{
            position: 'absolute', width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)',
            top: '50%', left: '40%', transform: 'translate(-50%,-50%)',
            animation: 'ringPulse 5s ease-in-out infinite', pointerEvents: 'none',
          }} />

          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28,
            opacity: revealed ? 1 : 0, transition: 'opacity 0.6s ease 0.1s',
          }}>
            <div style={{ width: 32, height: 1, background: '#c9a84c', animation: revealed ? 'lineGrow 0.6s ease 0.2s both' : 'none' }} />
            <span style={{
              fontFamily: '"Courier New", monospace', fontSize: 8.5, letterSpacing: '3.5px',
              color: '#c9a84c', textTransform: 'uppercase',
              animation: revealed ? 'hFade 0.6s ease 0.3s both' : 'none', opacity: 0,
            }}>
              {t.sub}
            </span>
          </div>

          {/* Big headline — word by word */}
          <h1 id="hero-title" style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(44px, 5.5vw, 78px)',
            fontWeight: 300, lineHeight: 1.0, letterSpacing: '-1px',
            color: '#fff', marginBottom: 28,
          }}>
            {titleWords.map((word, wi) => (
              <span
                key={`${active}-${wi}`}
                style={{
                  display: 'block',
                  animation: `wordIn 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + wi * 0.12}s both`,
                  color: wi === titleWords.length - 1 ? '#c9a84c' : '#fff',
                  fontStyle: wi === titleWords.length - 1 ? 'italic' : 'normal',
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Hairline */}
          <div style={{
            height: 1, background: 'linear-gradient(90deg, rgba(201,168,76,0.6), transparent)',
            width: 180, marginBottom: 24,
            animation: revealed ? 'lineGrow 0.7s ease 0.6s both' : 'none',
          }} />

          {/* Description */}
          <p style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 16, fontWeight: 300, fontStyle: 'italic',
            color: 'rgba(255,255,255,0.45)', lineHeight: 1.85,
            maxWidth: 380, marginBottom: 36,
            animation: revealed ? 'hReveal 0.7s ease 0.55s both' : 'none',
          }}>
            {t.desc}
          </p>

          {/* CTA buttons */}
          <div id="hero-btns" style={{
            display: 'flex', alignItems: 'center', gap: 14,
            marginBottom: 44, flexWrap: 'wrap',
            animation: revealed ? 'hReveal 0.7s ease 0.7s both' : 'none',
          }}>
            <button
              className="hero-cta-btn"
              onClick={() => setModalOpen(true)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: '#c9a84c', color: '#000', border: 'none', cursor: 'pointer',
                fontFamily: '"Courier New", monospace', fontSize: 9.5, fontWeight: 700,
                letterSpacing: '2.5px', textTransform: 'uppercase',
                padding: '15px 28px',
                transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              Reserve Consultation
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
                <path d="M1 4.5H12M8.5 1L12 4.5L8.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <a
              href="#results"
              className="hero-outline-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                fontFamily: '"Courier New", monospace', fontSize: 9.5,
                letterSpacing: '2px', textTransform: 'uppercase',
                padding: '14px 22px',
                border: '1px solid rgba(255,255,255,0.18)',
                transition: 'all 0.3s ease',
              }}
            >
              View Results
            </a>
          </div>

          {/* Stat highlight */}
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 18,
            paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)',
            animation: revealed ? 'hReveal 0.7s ease 0.85s both' : 'none',
          }}>
            <div>
              <div style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 42, fontWeight: 300, color: '#c9a84c', lineHeight: 1,
              }}>{t.stat[0]}</div>
            </div>
            <div style={{ paddingTop: 6 }}>
              <p style={{
                fontFamily: '"Courier New", monospace', fontSize: 8.5,
                letterSpacing: '1.5px', color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase', lineHeight: 1.7, maxWidth: 200,
              }}>{t.stat[1]}</p>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center', paddingTop: 10 }}>
              {TREATMENTS.map((_, i) => (
                <button
                  key={i}
                  className="hero-dot"
                  onClick={() => goTo(i)}
                  style={{
                    width: i === active ? 28 : 6,
                    height: 6, borderRadius: 3, border: 'none', cursor: 'pointer',
                    background: i === active ? '#c9a84c' : 'rgba(255,255,255,0.2)',
                    transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                    padding: 0,
                  }}
                  aria-label={`View treatment ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div id="hero-scroll-ind" style={{
            position: 'absolute', bottom: 36, left: '7%',
            display: 'flex', alignItems: 'center', gap: 12,
            animation: revealed ? 'hFade 1s ease 1.2s both' : 'none',
          }}>
            <div style={{ width: 1, height: 44, background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', left: 0, right: 0, background: '#c9a84c',
                animation: 'worm 2s cubic-bezier(0.4,0,0.2,1) infinite',
              }} />
            </div>
            <span style={{ fontFamily: '"Courier New", monospace', fontSize: 8, letterSpacing: '3px', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>Scroll</span>
          </div>
        </div>

        {/* ════════════ RIGHT ════════════ */}
        <div id="hero-right">

          {/* Images */}
          {TREATMENTS.map((tr, i) => (
            <div key={tr.id} style={{
              position: 'absolute', inset: 0,
              opacity: i === active ? 1 : 0,
              transition: 'opacity 0.95s ease',
              zIndex: i === active ? 2 : 1,
            }}>
              <img
                src={tr.img} alt={tr.sub}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top',
                  transform: i === active ? 'scale(1)' : 'scale(1.05)',
                  transition: 'transform 6s ease',
                  filter: 'brightness(0.75) saturate(0.9)',
                }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, #060606 0%, rgba(6,6,6,0.35) 40%, transparent 100%)',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(6,6,6,0.4) 0%, transparent 30%, transparent 70%, rgba(6,6,6,0.6) 100%)',
              }} />
            </div>
          ))}

          {/* Scanlines effect */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 8, pointerEvents: 'none',
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)',
            animation: 'scanMove 0.1s linear infinite',
          }} />

          {/* Left gradient blend into left column */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '30%',
            background: 'linear-gradient(90deg, #060606 0%, transparent 100%)',
            zIndex: 9, pointerEvents: 'none',
          }} />

          {/* Gold top edge */}
          <div style={{
            position: 'absolute', top: 0, left: '15%', right: 0, height: 1,
            background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)',
            zIndex: 10,
          }} />

         
          {/* ── Treatment counter ── */}
          <div id="hero-counter" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
          }}>
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: '1px' }}>
              0{active + 1}
            </span>
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.1)' }} />
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 11, color: 'rgba(255,255,255,0.15)' }}>
              0{TREATMENTS.length}
            </span>
          </div>

          {/* ── Tab selector ── */}
          <div id="hero-tabs">
            {TREATMENTS.map((tr, i) => (
              <button
                key={tr.id}
                onClick={() => goTo(i)}
                style={{
                  flex: 1, background: i === active ? 'rgba(201,168,76,0.1)' : 'rgba(6,6,6,0.7)',
                  border: 'none', borderTop: `2px solid ${i === active ? '#c9a84c' : 'transparent'}`,
                  borderRight: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer', padding: '14px 8px',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.35s ease',
                }}
              >
                <div style={{
                  fontFamily: '"Courier New", monospace', fontSize: 8, letterSpacing: '2px',
                  color: i === active ? '#c9a84c' : 'rgba(255,255,255,0.3)',
                  textTransform: 'uppercase', marginBottom: 2,
                  transition: 'color 0.3s ease',
                }}>
                  {tr.slug}
                </div>
                <div style={{
                  fontFamily: '"Cormorant Garamond", serif', fontSize: 11,
                  color: i === active ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)',
                  transition: 'color 0.3s ease',
                }}>
                  {tr.sub}
                </div>
                {/* Progress underline for active */}
                {i === active && (
                  <div style={{
                    height: 1.5, marginTop: 8,
                    background: 'rgba(201,168,76,0.3)',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    <div
                      ref={i === active ? progRef : null}
                      style={{
                        position: 'absolute', inset: 0,
                        background: '#c9a84c',
                        transformOrigin: 'left center',
                        transform: 'scaleX(0)',
                      }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
