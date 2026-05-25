import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { prpFaqMenu } from '../data/prpFaqTopics';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [mobileFaqOpen, setMobileFaqOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const faqDropdownRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setFaqOpen(false);
    setMobileFaqOpen(false);
  }, [location]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (faqDropdownRef.current && !faqDropdownRef.current.contains(e.target)) {
        setFaqOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const close = () => {
    setMenuOpen(false);
    setFaqOpen(false);
    setMobileFaqOpen(false);
  };

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setFaqOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setFaqOpen(false), 150);
  };

  const isFaqActive = location.pathname.startsWith('/faq');

  const links = [
    { href: '/treatments', label: 'Treatments', page: true },
    { href: '/conditions', label: 'Conditions', page: true },
    { href: isHome ? '#doctor' : '/#doctor', label: 'Dr. Matla' },
    { href: isHome ? '#results' : '/#results', label: 'Results' },
  ];

  const NavLink = ({ link }) => {
    if (link.page) {
      const isActive = location.pathname === link.href;
      return (
        <Link
          to={link.href}
          className={`nl${isActive ? ' nl-active' : ''}`}
          onClick={close}
        >
          {link.label}
        </Link>
      );
    }
    return <a className="nl" href={link.href} onClick={close}>{link.label}</a>;
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <div className="nav-inner">
          <Link className="brand" to="/" onClick={close}>
            PRP <b>Treatment</b>
          </Link>

          <div className="nav-links">
            {links.map(l => <NavLink key={l.href} link={l} />)}

            <div
              ref={faqDropdownRef}
              className={`nl-dropdown${faqOpen ? ' nl-dropdown--open' : ''}`}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button
                className={`nl nl-dropdown-trigger${isFaqActive ? ' nl-active' : ''}`}
                onClick={() => setFaqOpen(o => !o)}
                aria-haspopup="true"
                aria-expanded={faqOpen}
              >
                FAQ &amp; Guides
                <svg className="nl-caret" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="nl-dropdown-menu" role="menu">
                {prpFaqMenu.map(item => (
                  <Link
                    key={item.slug || 'all'}
                    to={item.slug ? `/faq/${item.slug}` : '/faq'}
                    className="nl-dropdown-item"
                    onClick={close}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <a className="nav-cta" href={isHome ? '#booking' : '/#booking'}>Reserve Consultation</a>
          </div>

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

      <div
        className={`mobile-backdrop${menuOpen ? ' open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {links.map(l => {
          if (l.page) {
            return <Link key={l.href} to={l.href} onClick={close}>{l.label}</Link>;
          }
          return <a key={l.href} href={l.href} onClick={close}>{l.label}</a>;
        })}

        <button
          className={`mobile-accordion-trigger${mobileFaqOpen ? ' open' : ''}`}
          onClick={() => setMobileFaqOpen(o => !o)}
          aria-expanded={mobileFaqOpen}
        >
          FAQ &amp; Guides
          <span className="mobile-accordion-icon">{mobileFaqOpen ? '−' : '+'}</span>
        </button>
        <div className={`mobile-accordion-content${mobileFaqOpen ? ' open' : ''}`}>
          {prpFaqMenu.map(item => (
            <Link
              key={item.slug || 'all'}
              to={item.slug ? `/faq/${item.slug}` : '/faq'}
              onClick={close}
              className="mobile-sublink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a href={isHome ? '#booking' : '/#booking'} onClick={close} className="mobile-cta">
          Reserve Consultation
        </a>
      </div>
    </>
  );
}
