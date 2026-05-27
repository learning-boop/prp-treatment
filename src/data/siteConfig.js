// ─────────────────────────────────────────────────────────────────────────────
//  PRP Treatment — Site Configuration
//  Single source of truth for all site-wide data: branding, addresses,
//  contact details, services, analytics IDs and meta defaults.
//
//  Import this into SEO components, schema generators and page data files.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // ── Domains ──────────────────────────────────────────────────────────────
  liveDomain:    'https://prptreatment.uk',
  stagingDomain: 'https://prp-treatment.vercel.app',

  // ── Branding ─────────────────────────────────────────────────────────────
  siteName:     'PRP Treatment UK',
  businessName: 'Dr Matla Aesthetics',
  legalName:    'Dr Matla Aesthetics Ltd',
  displayName:  'Dr Matla Aesthetics — PRP Treatment Newcastle',
  tagline:      'Regenerative Aesthetics. Clinically Delivered.',

  // ── Doctor ────────────────────────────────────────────────────────────────
  doctorName:       'Dr Matla',
  doctorTitle:      'Aesthetic Physician & Regenerative Medicine Specialist',
  doctorQuals:      'MBChB, MRCS, DRCOG, Aesthetic Medicine (UK-Trained)',

  // ── Primary Location (Newcastle) ─────────────────────────────────────────
  address: {
    streetAddress:   'Old Brewery Court, Starbeck Ave, Jesmond',
    addressLocality: 'Newcastle upon Tyne',
    addressRegion:   'Tyne and Wear',
    postalCode:      'NE2 1XG',
    addressCountry:  'GB',
  },

  // ── Contact ───────────────────────────────────────────────────────────────
  phone:         '+44 333 444 1399',
  email:         'enquiries@prptreatment.uk',
  bookingUrl:    'https://prptreatment.uk/#booking',

  // ── Social / Authority ────────────────────────────────────────────────────
  googleBusinessUrl: 'https://g.page/drmatla-aesthetics',
  instagramUrl:      'https://instagram.com/drmatla_aesthetics',
  facebookUrl:       'https://facebook.com/drmatla',
  mainClinicWebsite: 'https://drmatla.com',

  // ── Geographic targeting ──────────────────────────────────────────────────
  primaryCity:    'Newcastle upon Tyne',
  primaryRegion:  'North East England',
  countryCode:    'GB',
  language:       'en-GB',
  geoRegion:      'GB-NET', // ISO 3166-2 for Newcastle upon Tyne

  areaServed: [
    'Newcastle upon Tyne',
    'Jesmond',
    'Gosforth',
    'Gateshead',
    'Sunderland',
    'Durham',
    'Hexham',
    'Morpeth',
    'North East England',
  ],

  // ── Services offered ─────────────────────────────────────────────────────
  services: [
    'PRP Treatment',
    'PRP Hair Treatment',
    'PRP Hair Loss Treatment',
    'PRP Facial',
    'Vampire Facial',
    'PRP Under Eye Treatment',
    'PRP Skin Rejuvenation',
    'PRP Microneedling',
    'PRP Acne Scar Treatment',
    'Platelet Rich Plasma Treatment',
  ],

  // ── Trust signals ─────────────────────────────────────────────────────────
  googleRating:      '5.0',
  googleReviewCount: '144',
  cqcRegistered:     true,
  founded:           '2018',

  // ── Analytics (replace with real IDs) ────────────────────────────────────
  ga4MeasurementId:         'G-XXXXXXXXXX',     // Replace with GA4 ID
  googleSearchConsoleToken: 'REPLACE_GSC_TOKEN', // Replace with GSC HTML tag token
};

// ── Default meta fallbacks ────────────────────────────────────────────────────
export const defaultMeta = {
  title:       'PRP Treatment Newcastle | Platelet Rich Plasma | Dr Matla',
  description: 'Expert PRP treatment in Newcastle — hair loss restoration, Vampire Facial, skin rejuvenation and under-eye PRP by Dr Matla. Doctor-led, clinically proven regenerative aesthetics.',
  ogImage:     `${siteConfig.liveDomain}/assets/og-image.jpg`,
  twitterCard: 'summary_large_image',
  robots:      'index,follow,max-image-preview:large',
};

// ── Sitemap routes (used by generate-sitemap.js) ──────────────────────────────
export const routesForSitemap = [
  { path: '/',                             priority: '1.0', changefreq: 'weekly'  },
  { path: '/prp-hair-treatment-newcastle', priority: '0.9', changefreq: 'monthly' },
  { path: '/prp-facial-newcastle',         priority: '0.9', changefreq: 'monthly' },
  { path: '/prp-under-eye-newcastle',      priority: '0.8', changefreq: 'monthly' },
  { path: '/prp-skin-rejuvenation-uk',     priority: '0.8', changefreq: 'monthly' },
  { path: '/prp-microneedling-newcastle',  priority: '0.8', changefreq: 'monthly' },
  { path: '/vampire-facial-newcastle',     priority: '0.9', changefreq: 'monthly' },
  { path: '/prp-hair-loss-treatment',      priority: '0.8', changefreq: 'monthly' },
  { path: '/platelet-rich-plasma-uk',      priority: '0.8', changefreq: 'monthly' },
  { path: '/treatments',                   priority: '0.8', changefreq: 'monthly' },
  { path: '/conditions',                   priority: '0.7', changefreq: 'monthly' },
  { path: '/faq',                          priority: '0.7', changefreq: 'monthly' },
  { path: '/about',                        priority: '0.6', changefreq: 'monthly' },
  { path: '/contact',                      priority: '0.6', changefreq: 'monthly' },
  { path: '/faq/prp-treatment-questions',       priority: '0.6', changefreq: 'monthly' },
  { path: '/faq/hair-loss-questions',           priority: '0.6', changefreq: 'monthly' },
  { path: '/faq/facial-rejuvenation-questions', priority: '0.6', changefreq: 'monthly' },
  { path: '/faq/skin-tightening-questions',     priority: '0.5', changefreq: 'monthly' },
  { path: '/faq/vampire-facial-questions',      priority: '0.6', changefreq: 'monthly' },
  { path: '/faq/acne-scar-questions',           priority: '0.5', changefreq: 'monthly' },
  { path: '/faq/cost-pricing',                  priority: '0.5', changefreq: 'monthly' },
  { path: '/faq/safety-recovery',               priority: '0.5', changefreq: 'monthly' },
  { path: '/faq/treatment-comparisons',         priority: '0.5', changefreq: 'monthly' },
];
