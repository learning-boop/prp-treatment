export default function Footer() {
  const navLinks = ['#doctor', '#treatment', '#process', '#results', '#services', '#testimonials', '#booking'];
  const navLabels = ['Dr. Matla', 'About PRP', 'The Process', 'Results', 'Treatments', 'Clients', 'Book Now'];

  const treatments = [
    'Facial Rejuvenation', 'Skin Rejuvenation', 'Under Eye Revitalisation',
    'Acne Scar Treatment', 'Periorbital Rejuvenation', 'Neck & Décolletage Renewal',
    'Hair Restoration', 'Hair Transplant Enhancement', 'Male Pattern Baldness',
    'Vampire Facial®', 'PRP + CO₂ Laser', 'PRP + Lipofilling',
    'Post-Surgical PRP', 'Total Renewal Programme',
  ];

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="f-brand">PRP Treatment</div>
            <div className="f-sub">by Dr. Matla — Harley Street, London</div>
            <div className="gd" />
            <p className="f-copy">
              London's premier destination for bespoke platelet-rich plasma aesthetic therapy.
              Medically led. Harley Street registered.
            </p>
            <div className="f-soc">
              <a href="#" className="soc" aria-label="LinkedIn">in</a>
              <a href="#" className="soc" aria-label="Instagram">ig</a>
              <a href="#" className="soc" aria-label="Facebook">fb</a>
            </div>
          </div>

          <div>
            <div className="f-hd">Navigate</div>
            {navLabels.map((l, i) => (
              <a key={l} href={navLinks[i]} className="f-lnk">{l}</a>
            ))}
          </div>

          <div>
            <div className="f-hd">Treatments</div>
            {treatments.map(t => (
              <a key={t} href="#services" className="f-lnk">{t}</a>
            ))}
          </div>

          <div>
            <div className="f-hd">Contact</div>
            <p className="f-copy">
              Harley Street<br />
              London W1G<br /><br />
              +44 (0) 20 XXXX XXXX<br />
              enquiries@drmatla.co.uk
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PRP Treatment by Dr. Matla. GMC Registered Practitioner. All rights reserved. Results may vary.</p>
      </div>
    </footer>
  );
}
