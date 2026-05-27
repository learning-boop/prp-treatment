// ─────────────────────────────────────────────────────────────────────────────
//  PRP Treatment — JSON-LD Schema Markup
//
//  Exports schema objects and generators for:
//    • LocalBusiness / MedicalBusiness
//    • Physician / Person
//    • Service / MedicalProcedure
//    • FAQPage
//    • BreadcrumbList
//    • WebSite (with sitelinks search box)
//    • AggregateRating
//    • Organization
//
//  All schemas are validated against Google's Rich Results guidelines (2026).
//  Use the SEO component to inject — it handles deduplication and cleanup.
// ─────────────────────────────────────────────────────────────────────────────

import { siteConfig } from './siteConfig';

const { liveDomain, address, phone, businessName, doctorName } = siteConfig;

// ─────────────────────────────────────────────────────────────────────────────
//  1. LOCAL BUSINESS / MEDICAL BUSINESS
//     Core schema — injected on every page via App.jsx
// ─────────────────────────────────────────────────────────────────────────────
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type':    ['MedicalBusiness', 'MedicalClinic'],
  '@id':      `${liveDomain}/#localbusiness`,

  name:          businessName,
  alternateName: 'Dr Matla Aesthetics — PRP Treatment Newcastle',
  legalName:     'Dr Matla Aesthetics Ltd',
  description:   'Doctor-led PRP treatment clinic in Newcastle — hair restoration, Vampire Facial, skin rejuvenation and under-eye PRP. Platelet-rich plasma specialists.',
  url:           liveDomain,
  telephone:     phone,
  email:         siteConfig.email,
  logo:          `${liveDomain}/assets/logo.png`,

  address: {
    '@type':         'PostalAddress',
    streetAddress:   address.streetAddress,
    addressLocality: address.addressLocality,
    addressRegion:   address.addressRegion,
    postalCode:      address.postalCode,
    addressCountry:  address.addressCountry,
  },

  geo: {
    '@type':    'GeoCoordinates',
    latitude:   '54.9841',   // Newcastle upon Tyne
    longitude:  '-1.6061',
  },

  areaServed: siteConfig.areaServed.map(city => ({
    '@type': 'City',
    name:    city,
  })),

  medicalSpecialty: [
    'Aesthetic Medicine',
    'Regenerative Medicine',
    'Dermatology',
  ],

  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name:    'PRP Treatment Services',
    itemListElement: siteConfig.services.map((service, i) => ({
      '@type':    'Offer',
      position:   i + 1,
      itemOffered: {
        '@type': 'Service',
        name:    service,
      },
    })),
  },

  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted:    'Cash, Credit Card, Debit Card, Bank Transfer',

  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '16:00' },
  ],

  aggregateRating: {
    '@type':       'AggregateRating',
    ratingValue:   siteConfig.googleRating,
    reviewCount:   siteConfig.googleReviewCount,
    bestRating:    '5',
    worstRating:   '1',
  },

  sameAs: [
    siteConfig.mainClinicWebsite,
    siteConfig.instagramUrl,
    siteConfig.facebookUrl,
    siteConfig.googleBusinessUrl,
  ].filter(Boolean),

  founder: { '@type': 'Person', name: doctorName },
  foundingDate: siteConfig.founded,
};

// ─────────────────────────────────────────────────────────────────────────────
//  2. PHYSICIAN SCHEMA
//     Injected on homepage and about page
// ─────────────────────────────────────────────────────────────────────────────
export const physicianSchema = {
  '@context': 'https://schema.org',
  '@type':    'Physician',
  '@id':      `${liveDomain}/about/#physician`,

  name:             doctorName,
  description:      `${doctorName} is a UK-trained aesthetic physician and regenerative medicine specialist, offering doctor-led PRP treatments in Newcastle for hair loss, facial rejuvenation and skin tightening.`,
  honorificPrefix:  'Dr',
  jobTitle:         siteConfig.doctorTitle,

  worksFor: {
    '@type': 'MedicalBusiness',
    name:    businessName,
    url:     liveDomain,
  },

  workLocation: {
    '@type':         'PostalAddress',
    addressLocality: address.addressLocality,
    postalCode:      address.postalCode,
    addressCountry:  address.addressCountry,
  },

  areaServed:        'Newcastle upon Tyne',
  medicalSpecialty: ['Aesthetic Medicine', 'Regenerative Medicine'],
  url:               `${liveDomain}/about`,

  knowsAbout: [
    'PRP Treatment',
    'Platelet Rich Plasma',
    'Hair Loss Restoration',
    'Vampire Facial',
    'Skin Rejuvenation',
    'Regenerative Aesthetics',
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
//  3. WEBSITE SCHEMA (with Sitelinks Searchbox signal)
// ─────────────────────────────────────────────────────────────────────────────
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type':    'WebSite',
  '@id':      `${liveDomain}/#website`,
  name:       siteConfig.siteName,
  url:        liveDomain,
  description: 'Doctor-led PRP treatment clinic in Newcastle, UK — hair restoration, Vampire Facial and skin rejuvenation by Dr Matla.',
  publisher: {
    '@id': `${liveDomain}/#localbusiness`,
  },
  potentialAction: {
    '@type':       'SearchAction',
    target:        `${liveDomain}/faq?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
//  4. FAQ SCHEMA GENERATOR
//     Pass an array of { q, a } or { question, answer } objects
// ─────────────────────────────────────────────────────────────────────────────
export const faqSchema = (faqs = []) => ({
  '@context': 'https://schema.org',
  '@type':    'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name:    faq.q || faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text:    faq.a || faq.answer,
    },
  })),
});

// ─────────────────────────────────────────────────────────────────────────────
//  5. SERVICE / MEDICAL PROCEDURE SCHEMA GENERATOR
//     Call per treatment page
// ─────────────────────────────────────────────────────────────────────────────
export const serviceSchema = ({
  name,
  description,
  path,
  bodyLocation = 'Face, Scalp, or Skin',
  howPerformed,
  preparation,
  followup,
  risks,
  benefits,
  duration,
  priceFrom,
}) => ({
  '@context': 'https://schema.org',
  '@type':    ['Service', 'MedicalProcedure'],
  '@id':      `${liveDomain}${path}/#service`,

  name,
  description,
  url:          `${liveDomain}${path}`,

  // Service fields
  serviceType:  'Aesthetic Medical Procedure',
  areaServed: {
    '@type': 'City',
    name:    'Newcastle upon Tyne',
  },
  provider: {
    '@type': 'MedicalBusiness',
    name:    businessName,
    url:     liveDomain,
    telephone: phone,
  },

  // MedicalProcedure fields
  bodyLocation,
  howPerformed: howPerformed || `${name} is performed by Dr Matla using platelet-rich plasma derived from the patient's own blood. The treatment is delivered by injection or microneedling at our Newcastle clinic.`,
  preparation:  preparation  || 'Arrive well-hydrated. Avoid aspirin/ibuprofen for 48 hours. No make-up on treatment area.',
  followup:     followup     || 'Avoid strenuous exercise and alcohol for 24 hours. Use SPF 50+ on facial areas.',
  risks:        risks        || 'Temporary redness, swelling, bruising. Rare risk of infection. Full risk discussion at consultation.',
  benefits:     benefits     || `Natural, regenerative results with minimal downtime. ${name} uses your own biological material for safe, effective treatment.`,

  ...(duration && { duration }),
  ...(priceFrom && {
    offers: {
      '@type':         'Offer',
      priceCurrency:   'GBP',
      price:           priceFrom,
      availability:    'https://schema.org/InStock',
      validFrom:       new Date().toISOString().split('T')[0],
    },
  }),
});

// ─────────────────────────────────────────────────────────────────────────────
//  6. BREADCRUMB SCHEMA GENERATOR
//     Pass array of { name, path } breadcrumb items
// ─────────────────────────────────────────────────────────────────────────────
export const breadcrumbSchema = (items = []) => ({
  '@context': 'https://schema.org',
  '@type':    'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: liveDomain },
    ...items.map((item, i) => ({
      '@type':   'ListItem',
      position:  i + 2,
      name:      item.name,
      item:      `${liveDomain}${item.path}`,
    })),
  ],
});

// ─────────────────────────────────────────────────────────────────────────────
//  7. AGGREGATE RATING SCHEMA
//     Standalone rating — can be embedded in other schemas or injected alone
// ─────────────────────────────────────────────────────────────────────────────
export const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type':    'MedicalBusiness',
  '@id':      `${liveDomain}/#rating`,
  name:       businessName,
  aggregateRating: {
    '@type':     'AggregateRating',
    ratingValue: siteConfig.googleRating,
    reviewCount: siteConfig.googleReviewCount,
    bestRating:  '5',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
//  8. PRE-BUILT TREATMENT SCHEMAS
//     Ready-to-use for each treatment page
// ─────────────────────────────────────────────────────────────────────────────
export const treatmentSchemas = {
  prpHair: serviceSchema({
    name:        'PRP Hair Treatment Newcastle',
    description: 'Doctor-led platelet rich plasma hair treatment in Newcastle for hair thinning, pattern baldness and hair loss restoration by Dr Matla.',
    path:        '/prp-hair-treatment-newcastle',
    bodyLocation:'Scalp',
    priceFrom:   '480',
    duration:    'PT90M',
  }),

  vampireFacial: serviceSchema({
    name:        'Vampire Facial Newcastle',
    description: 'Vampire Facial — PRP combined with medical microneedling for skin rejuvenation, acne scar treatment and collagen stimulation in Newcastle.',
    path:        '/vampire-facial-newcastle',
    bodyLocation:'Face',
    priceFrom:   '650',
    duration:    'PT90M',
  }),

  prpFacial: serviceSchema({
    name:        'PRP Facial Newcastle',
    description: 'PRP facial treatment in Newcastle for skin rejuvenation, collagen stimulation and a radiant, youthful complexion.',
    path:        '/prp-facial-newcastle',
    bodyLocation:'Face',
    priceFrom:   '450',
    duration:    'PT90M',
  }),

  prpUnderEye: serviceSchema({
    name:        'PRP Under Eye Treatment Newcastle',
    description: 'PRP under eye treatment in Newcastle for dark circles, tear trough hollowness and fine periorbital lines by Dr Matla.',
    path:        '/prp-under-eye-newcastle',
    bodyLocation:'Periorbital Area',
    priceFrom:   '420',
    duration:    'PT60M',
  }),

  prpSkinRejuvenation: serviceSchema({
    name:        'PRP Skin Rejuvenation UK',
    description: 'PRP skin rejuvenation treatments in Newcastle and across the UK — improve firmness, texture and radiance with doctor-led platelet rich plasma.',
    path:        '/prp-skin-rejuvenation-uk',
    bodyLocation:'Face, Neck, Décolletage',
    priceFrom:   '450',
    duration:    'PT90M',
  }),

  prpMicroneedling: serviceSchema({
    name:        'PRP Microneedling Newcastle',
    description: 'PRP microneedling in Newcastle — collagen induction therapy combined with platelet rich plasma for acne scars, texture and skin renewal.',
    path:        '/prp-microneedling-newcastle',
    bodyLocation:'Face, Scalp',
    priceFrom:   '550',
    duration:    'PT90M',
  }),
};
