/**
 * SEO.jsx — PRP Treatment UK
 * Sets document.title, meta tags, Open Graph, Twitter Card,
 * canonical URLs, geo tags, and JSON-LD schema on every route change.
 */

import { useEffect } from 'react';
import { siteConfig, defaultMeta } from '../../data/siteConfig';
import { buildCanonical, STAGING_HOST } from '../../data/seoConfig';
import { breadcrumbSchema as makeBreadcrumb } from '../../data/schema';

// ── Helpers ────────────────────────────────────────────────────────────────

const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteConfig.liveDomain}${path.startsWith('/') ? path : `/${path}`}`;
};

const ensureMeta = (selector, createTag) => {
  let el = document.head.querySelector(selector);
  if (!el) { el = createTag(); document.head.appendChild(el); }
  return el;
};

const setMeta = (name, content) => {
  if (!content) return;
  const el = ensureMeta(`meta[name="${name}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute('name', name);
    return m;
  });
  el.setAttribute('content', content);
};

const setProperty = (property, content) => {
  if (!content) return;
  const el = ensureMeta(`meta[property="${property}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute('property', property);
    return m;
  });
  el.setAttribute('content', content);
};

const setLink = (rel, href) => {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) { el = document.createElement('link'); el.setAttribute('rel', rel); document.head.appendChild(el); }
  el.setAttribute('href', href);
};

const injectSchemas = (schemas) => {
  document.querySelectorAll('script[data-prp-schema="true"]').forEach(s => s.remove());
  const arr = Array.isArray(schemas) ? schemas : [schemas];
  arr.filter(Boolean).forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-prp-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};

// ── Component ──────────────────────────────────────────────────────────────

export default function SEO({
  title       = defaultMeta.title,
  description = defaultMeta.description,
  path        = '/',
  image       = defaultMeta.ogImage,
  schema      = [],
  noindex     = false,
  keywords,
  breadcrumb,
}) {
  useEffect(() => {
    const isStaging    = window.location.hostname.includes(STAGING_HOST);
    const canonicalUrl = buildCanonical(path);
    const imageUrl     = absoluteUrl(image);
    const shouldIndex  = !noindex && !isStaging;

    // Title
    document.title = title;

    // Core meta
    setMeta('description', description);
    setMeta('robots', shouldIndex
      ? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
      : 'noindex,nofollow');
    setMeta('viewport',    'width=device-width, initial-scale=1');
    setMeta('theme-color', '#1a1a1a');
    if (keywords) setMeta('keywords', keywords);

    // Canonical
    setLink('canonical', canonicalUrl);

    // Geo / local
    setMeta('geo.region',    siteConfig.geoRegion);
    setMeta('geo.placename', siteConfig.primaryCity);
    setMeta('language',      siteConfig.language);

    // Open Graph
    setProperty('og:type',        'website');
    setProperty('og:site_name',   siteConfig.siteName);
    setProperty('og:url',         canonicalUrl);
    setProperty('og:title',       title);
    setProperty('og:description', description);
    setProperty('og:image',       imageUrl);
    setProperty('og:image:width',  '1200');
    setProperty('og:image:height', '630');
    setProperty('og:image:alt',    title);
    setProperty('og:locale',      'en_GB');

    // Twitter Card
    setMeta('twitter:card',        'summary_large_image');
    setMeta('twitter:title',       title);
    setMeta('twitter:description', description);
    setMeta('twitter:image',       imageUrl);

    // JSON-LD
    const allSchemas = [...(Array.isArray(schema) ? schema : [schema])];
    if (breadcrumb && breadcrumb.length > 0) {
      allSchemas.push(makeBreadcrumb(breadcrumb));
    }
    injectSchemas(allSchemas);

    return () => {
      document.querySelectorAll('script[data-prp-schema="true"]').forEach(s => s.remove());
    };
  }, [title, description, path, image, schema, noindex, keywords, breadcrumb]);

  return null;
}
