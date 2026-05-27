/**
 * LocalTrustSection.jsx — PRP Treatment UK
 * ──────────────────────────────────────────────────────────────────────────────
 * Local SEO trust section that reinforces Newcastle targeting for Google.
 *
 * This component:
 *  • Renders keyword-rich copy targeting Newcastle + UK searches
 *  • Uses semantic HTML with proper heading hierarchy
 *  • Displays trust signals (Google rating, CQC, doctor credentials)
 *  • Provides NAP (Name, Address, Phone) structured markup
 *  • Links to Google Maps (local SEO signal)
 *  • Embeds schema-ready address in visible copy
 *
 * Place this component on the homepage, contact page and treatment pages.
 * ──────────────────────────────────────────────────────────────────────────────
 */

import { siteConfig } from '../../data/siteConfig';

const {
  businessName,
  doctorName,
  phone,
  address,
  googleRating,
  googleReviewCount,
  areaServed,
} = siteConfig;

// Trust items — renders as accessible list
const trustItems = [
  {
    icon: '★',
    label: `${googleRating} Google Rating`,
    detail: `${googleReviewCount}+ verified patient reviews`,
  },
  {
    icon: '⚕',
    label: 'Doctor-Led Clinic',
    detail: `All PRP treatments delivered by ${doctorName}`,
  },
  {
    icon: '🩸',
    label: 'Autologous PRP',
    detail: 'Your own blood — no synthetic additives',
  },
  {
    icon: '📍',
    label: 'Newcastle Upon Tyne',
    detail: `Serving ${areaServed.slice(0, 4).join(', ')} & surrounding areas`,
  },
];

export default function LocalTrustSection({ compact = false }) {
  const mapQuery = encodeURIComponent(
    `${businessName}, ${address.streetAddress}, ${address.addressLocality}, ${address.postalCode}`
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section
      className={`local-trust-sec${compact ? ' local-trust-sec--compact' : ''}`}
      aria-label="Local trust signals for PRP Treatment Newcastle"
    >
      <div className="wrap">
        {!compact && (
          <header className="local-trust-header">
            <div className="eyebrow center">Serving the North East</div>
            <h2 className="sh text-center">
              PRP Treatment Clinic <em>Newcastle</em>
            </h2>
            <div className="gd center" />
          </header>
        )}

        {/* Trust grid */}
        <ul className="local-trust-grid" role="list">
          {trustItems.map((item) => (
            <li key={item.label} className="local-trust-item">
              <span className="local-trust-icon" aria-hidden="true">{item.icon}</span>
              <div>
                <strong className="local-trust-label">{item.label}</strong>
                <p className="local-trust-detail">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* NAP block — structured for local SEO */}
        <address
          className="local-nap"
          itemScope
          itemType="https://schema.org/MedicalBusiness"
        >
          <meta itemProp="name" content={businessName} />
          <meta itemProp="telephone" content={phone} />

          <div className="local-nap-inner">
            <div className="local-nap-block">
              <span className="local-nap-label">Clinic Address</span>
              <span
                className="local-nap-value"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">{address.streetAddress}</span>,{' '}
                <span itemProp="addressLocality">{address.addressLocality}</span>{' '}
                <span itemProp="postalCode">{address.postalCode}</span>
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="local-nap-maps"
                aria-label={`View ${businessName} on Google Maps`}
              >
                View on Google Maps →
              </a>
            </div>

            <div className="local-nap-divider" aria-hidden="true" />

            <div className="local-nap-block">
              <span className="local-nap-label">Book a Consultation</span>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="local-nap-phone"
                itemProp="telephone"
                aria-label={`Call ${businessName} on ${phone}`}
              >
                {phone}
              </a>
              <span className="local-nap-hours">Mon–Fri 9am–6pm · Sat 9am–4pm</span>
            </div>

            <div className="local-nap-divider" aria-hidden="true" />

            <div className="local-nap-block">
              <span className="local-nap-label">Areas Served</span>
              <span className="local-nap-value local-nap-areas">
                {areaServed.join(' · ')}
              </span>
            </div>
          </div>
        </address>

        {/* Google Reviews CTA */}
        <div className="local-trust-reviews">
          <p className="local-trust-review-copy">
            <strong>{googleReviewCount}+ patients</strong> across Newcastle, Jesmond, Gosforth and the wider North East have reviewed their PRP experience with Dr Matla — rated{' '}
            <strong>{googleRating}/5</strong> on Google.
          </p>
          <a
            href={siteConfig.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label="Read patient reviews for Dr Matla Aesthetics on Google"
          >
            Read Patient Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
