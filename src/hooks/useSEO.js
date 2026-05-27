/**
 * useSEO — PRP Treatment UK
 * ──────────────────────────────────────────────────────────────────────────────
 * Lightweight hook for page-level SEO. Use the <SEO> component for rich schema;
 * use this hook when you only need meta tags without JSX in the component tree.
 *
 * Usage:
 *   useSEO({
 *     title:       'PRP Hair Treatment Newcastle | Dr Matla',
 *     description: 'Doctor-led PRP hair...',
 *     canonical:   '/prp-hair-treatment-newcastle',
 *     jsonLd:      [localBusinessSchema, treatmentSchemas.prpHair],
 *     keywords:    'PRP Hair Newcastle, PRP Hair UK',
 *   });
 * ──────────────────────────────────────────────────────────────────────────────
 */

import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { buildCanonical } from '../data/seoConfig';

const DEFAULT_IMAGE = `${siteConfig.liveDomain}/assets/og-image.jpg`;

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  const selector = `meta[${attr}="${name}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
  return el;
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  return el;
}

function injectJsonLd(schemas) {
  document.querySelectorAll('script[data-useseo]').forEach(s => s.remove());
  const arr = Array.isArray(schemas) ? schemas : [schemas];
  arr.filter(Boolean).forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-useseo', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export default function useSEO({
  title,
  description,
  canonical,
  ogImage,
  jsonLd,
  keywords,
  noindex = false,
} = {}) {
  useEffect(() => {
    const prevTitle = document.title;
    const fullTitle = title || siteConfig.siteName;
    const fullCanon = canonical ? buildCanonical(canonical) : siteConfig.liveDomain;
    const ogImg     = ogImage || DEFAULT_IMAGE;

    // Title
    document.title = fullTitle;

    // Core
    if (description) setMeta('description', description);
    if (keywords)    setMeta('keywords',    keywords);
    setMeta('robots', noindex
      ? 'noindex,nofollow'
      : 'index,follow,max-image-preview:large,max-snippet:-1');

    // Geo
    setMeta('geo.region',    siteConfig.geoRegion);
    setMeta('geo.placename', siteConfig.primaryCity);
    setMeta('language',      siteConfig.language);

    // Canonical
    setLink('canonical', fullCanon);

    // Open Graph
    setMeta('og:type',        'website',            'property');
    setMeta('og:site_name',   siteConfig.siteName,  'property');
    setMeta('og:url',         fullCanon,            'property');
    setMeta('og:title',       fullTitle,            'property');
    setMeta('og:image',       ogImg,                'property');
    setMeta('og:locale',      'en_GB',              'property');
    if (description) setMeta('og:description', description, 'property');

    // Twitter Card
    setMeta('twitter:card',  'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:image', ogImg);
    if (description) setMeta('twitter:description', description);

    // JSON-LD
    if (jsonLd) injectJsonLd(jsonLd);

    return () => {
      document.title = prevTitle;
      document.querySelectorAll('script[data-useseo]').forEach(s => s.remove());
    };
  }, [title, description, canonical, ogImage, noindex, keywords]);
}
