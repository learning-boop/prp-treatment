import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Track scroll for solid background ── */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* ── Lock body scroll while drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Close drawer if resized up to desktop ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  const links = [
    { href: '#doctor',       label: 'Dr. Matla'  },
    { href: '#process',      label: 'Treatment'  },
    { href: '#results',      label: 'Results'    },
    { href: '#services',     label: 'Services'   },
    { href: '#testimonials', label: 'Clients'    },
  ];

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Navbar ── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <div className="nav-inner">
          <a className="brand" href="#" onClick={close}>
            PRP <b>Treatment</b>
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map(l => (
              <a key={l.href} className="nl" href={l.href}>{l.label}</a>
            ))}
            <a className="nav-cta" href="#booking">Reserve Consultation</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile backdrop ── */}
      <div
        className={`mobile-backdrop${menuOpen ? ' open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Mobile menu drawer ── */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="#booking" onClick={close} className="mobile-cta">
          Reserve Consultation
        </a>
      </div>
    </>
  );
}