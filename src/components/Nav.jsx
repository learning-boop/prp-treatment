import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '#doctor', label: 'Dr. Matla' },
    // { href: '#treatment', label: 'About PRP' },
    { href: '#process', label: 'Treatment' },
    { href: '#results', label: 'Results' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Clients' },
  ];

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a className="brand" href="#">PRP <b>Treatment</b></a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l.href} className="nl" href={l.href}>{l.label}</a>
            ))}
            <a className="nav-cta" href="#booking">Reserve Your Consultation</a>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#booking" onClick={() => setMenuOpen(false)} style={{ color: 'var(--gold)', border: '1px solid var(--gold)', padding: '.6rem 2rem', fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', fontFamily: 'var(--sans)' }}>Book Now</a>
      </div>
    </>
  );
}
