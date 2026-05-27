// ─────────────────────────────────────────────────────────────────────────────
//  PRP Treatment — Per-Page SEO Configuration
//
//  Every route gets a:
//    • title       — ≤ 60 chars, keyword-front loaded
//    • description — 140–160 chars, conversion-focused
//    • keywords    — informational only (not a ranking signal but useful for
//                    content alignment and PPC)
//    • ogImage     — absolute path to page-specific OG image (optional)
//    • schema      — list of schema types to inject on this page
//
//  Priority keyword targets per SEMRUSH/Ahrefs UK data (2026):
//    PRP Treatment Newcastle · PRP Hair Treatment UK · Vampire Facial Newcastle
//    PRP Hair Loss Treatment · PRP Facial UK · PRP Skin Rejuvenation
//    PRP Under Eye Treatment · Platelet Rich Plasma Treatment UK
// ─────────────────────────────────────────────────────────────────────────────

import { siteConfig } from './siteConfig';

const { liveDomain } = siteConfig;

// ── Helpers ────────────────────────────────────────────────────────────────────
export const buildCanonical = (pathname = '/') => {
  const clean = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return `${liveDomain}${clean}`;
};

export const SITE_URL     = liveDomain;
export const STAGING_HOST = 'prp-treatment.vercel.app';

// ── Per-page SEO config ────────────────────────────────────────────────────────
export const pageSeo = {

  // ── Homepage ─────────────────────────────────────────────────────────────
  '/': {
    title:       'PRP Treatment Newcastle | Platelet Rich Plasma | Dr Matla',
    description: 'Doctor-led PRP treatment in Newcastle — hair loss restoration, Vampire Facial, skin rejuvenation and under-eye PRP. Clinically proven regenerative aesthetics by Dr Matla.',
    keywords:    'PRP Treatment Newcastle, Platelet Rich Plasma Newcastle, PRP Hair Treatment Newcastle, Vampire Facial Newcastle, PRP Facial Newcastle',
    schema:      ['LocalBusiness', 'Physician', 'WebSite'],
  },

  // ── Treatment pages ───────────────────────────────────────────────────────

  '/prp-hair-treatment-newcastle': {
    title:       'PRP Hair Treatment Newcastle | Hair Loss PRP | Dr Matla',
    description: 'PRP hair treatment in Newcastle for thinning hair and pattern baldness. Doctor-led platelet rich plasma hair restoration by Dr Matla. Book your consultation today.',
    keywords:    'PRP Hair Treatment Newcastle, PRP Hair Loss Newcastle, Hair Restoration Newcastle, Platelet Rich Plasma Hair Treatment UK',
    ogImage:     `${liveDomain}/assets/og-prp-hair.jpg`,
    schema:      ['MedicalProcedure', 'Service', 'FAQPage'],
  },

  '/vampire-facial-newcastle': {
    title:       'Vampire Facial Newcastle | PRP Microneedling | Dr Matla',
    description: 'Vampire Facial in Newcastle — PRP combined with medical microneedling for skin rejuvenation, acne scar treatment and anti-ageing. Doctor-led by Dr Matla.',
    keywords:    'Vampire Facial Newcastle, Vampire Facial UK, PRP Microneedling Newcastle, PRP Facial Newcastle',
    ogImage:     `${liveDomain}/assets/og-vampire-facial.jpg`,
    schema:      ['MedicalProcedure', 'Service', 'FAQPage'],
  },

  '/prp-facial-newcastle': {
    title:       'PRP Facial Newcastle | Skin Rejuvenation PRP | Dr Matla',
    description: 'PRP facial treatment in Newcastle for collagen stimulation, skin renewal and a radiant complexion. Doctor-led by Dr Matla — natural, regenerative results.',
    keywords:    'PRP Facial Newcastle, PRP Facial UK, PRP Skin Rejuvenation Newcastle, Platelet Rich Plasma Facial UK',
    ogImage:     `${liveDomain}/assets/og-prp-facial.jpg`,
    schema:      ['MedicalProcedure', 'Service', 'FAQPage'],
  },

  '/prp-under-eye-newcastle': {
    title:       'PRP Under Eye Treatment Newcastle | Dark Circles | Dr Matla',
    description: 'PRP under eye treatment in Newcastle for dark circles, hollowness and fine lines around the eyes. Gentle, doctor-led platelet rich plasma by Dr Matla.',
    keywords:    'PRP Under Eye Treatment Newcastle, PRP Dark Circles Newcastle, PRP Under Eye UK, Tear Trough PRP Newcastle',
    ogImage:     `${liveDomain}/assets/og-prp-under-eye.jpg`,
    schema:      ['MedicalProcedure', 'Service', 'FAQPage'],
  },

  '/prp-skin-rejuvenation-uk': {
    title:       'PRP Skin Rejuvenation UK | Newcastle Clinic | Dr Matla',
    description: 'PRP skin rejuvenation treatments across the UK, based in Newcastle. Improve texture, firmness and radiance with doctor-led platelet rich plasma therapy.',
    keywords:    'PRP Skin Rejuvenation UK, PRP Skin Rejuvenation Newcastle, PRP Anti Ageing UK, Platelet Rich Plasma Skin Treatment UK',
    ogImage:     `${liveDomain}/assets/og-skin-rejuvenation.jpg`,
    schema:      ['MedicalProcedure', 'Service', 'FAQPage'],
  },

  '/prp-microneedling-newcastle': {
    title:       'PRP Microneedling Newcastle | Collagen Induction | Dr Matla',
    description: 'PRP microneedling in Newcastle — collagen induction therapy combined with platelet rich plasma for acne scars, texture and rejuvenation. Doctor-led by Dr Matla.',
    keywords:    'PRP Microneedling Newcastle, PRP Dermaroller Newcastle, Collagen Induction PRP UK, Microneedling PRP Newcastle',
    ogImage:     `${liveDomain}/assets/og-prp-microneedling.jpg`,
    schema:      ['MedicalProcedure', 'Service', 'FAQPage'],
  },

  '/prp-hair-loss-treatment': {
    title:       'PRP Hair Loss Treatment UK | Newcastle | Dr Matla',
    description: 'PRP hair loss treatment in the UK — Newcastle clinic. Medically-supervised platelet rich plasma for male pattern baldness, female hair thinning and alopecia.',
    keywords:    'PRP Hair Loss Treatment, PRP Hair Loss Treatment UK, PRP Alopecia Treatment Newcastle, Platelet Rich Plasma Hair Loss UK',
    ogImage:     `${liveDomain}/assets/og-hair-loss.jpg`,
    schema:      ['MedicalProcedure', 'Service', 'FAQPage'],
  },

  '/platelet-rich-plasma-uk': {
    title:       'Platelet Rich Plasma Treatment UK | Newcastle | Dr Matla',
    description: 'Platelet rich plasma treatment in the UK by Dr Matla — Newcastle. Evidence-based PRP for hair restoration, facial rejuvenation and skin tightening.',
    keywords:    'Platelet Rich Plasma Treatment UK, PRP Treatment UK, Platelet Rich Plasma Newcastle, PRP Clinic Newcastle',
    ogImage:     `${liveDomain}/assets/og-prp-uk.jpg`,
    schema:      ['MedicalProcedure', 'Service', 'FAQPage'],
  },

  // ── General pages ─────────────────────────────────────────────────────────

  '/treatments': {
    title:       'PRP Treatments Newcastle | All Services | Dr Matla',
    description: 'Explore all PRP treatments offered at Dr Matla Aesthetics in Newcastle — hair, face, skin, under eyes and microneedling. Doctor-led regenerative aesthetics.',
    keywords:    'PRP Treatments Newcastle, PRP Services Newcastle, Regenerative Aesthetics Newcastle',
    schema:      ['Service'],
  },

  '/conditions': {
    title:       'Conditions Treated with PRP | Newcastle | Dr Matla',
    description: 'Skin and hair conditions treated with PRP at Dr Matla Aesthetics in Newcastle — hair thinning, acne scars, dark circles, ageing skin and more.',
    keywords:    'PRP Hair Loss Newcastle, PRP Acne Scars Newcastle, PRP Dark Circles Newcastle',
    schema:      ['MedicalCondition'],
  },

  '/faq': {
    title:       'PRP FAQ Newcastle | Common Questions | Dr Matla',
    description: 'Answers to frequently asked questions about PRP treatment in Newcastle — safety, results, cost, recovery, hair loss and skin rejuvenation. Honest clinical guidance.',
    keywords:    'PRP FAQ, PRP Questions Newcastle, PRP Treatment Guide UK',
    schema:      ['FAQPage'],
  },

  '/about': {
    title:       'About Dr Matla | PRP Specialist Newcastle | Regenerative Aesthetics',
    description: 'Meet Dr Matla — doctor-led aesthetic physician and PRP specialist based in Newcastle. Learn about our approach to regenerative, clinically-safe aesthetic medicine.',
    keywords:    'Dr Matla Newcastle, PRP Specialist Newcastle, Aesthetic Doctor Newcastle',
    schema:      ['Physician', 'Person'],
  },

  '/contact': {
    title:       'Contact Dr Matla | Book PRP Consultation Newcastle',
    description: 'Book a PRP consultation with Dr Matla in Newcastle. Contact our clinic by phone, email or online form — expert PRP hair and skin treatments available now.',
    keywords:    'Book PRP Newcastle, PRP Consultation Newcastle, Dr Matla Contact',
    schema:      ['LocalBusiness'],
  },
};

// ── Default SEO (fallback for unregistered routes) ────────────────────────────
export const defaultSeo = {
  title:       'PRP Treatment Newcastle | Dr Matla Aesthetics',
  description: 'Doctor-led PRP treatment in Newcastle for hair restoration, facial rejuvenation and skin tightening. Clinically proven regenerative aesthetics by Dr Matla.',
  keywords:    'PRP Treatment Newcastle, Platelet Rich Plasma UK',
};

// ── Convenience getter ────────────────────────────────────────────────────────
export const getPageSeo = (pathname = '/') => {
  const clean = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return pageSeo[clean] || defaultSeo;
};
