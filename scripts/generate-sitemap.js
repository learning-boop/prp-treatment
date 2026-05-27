/**
 * generate-sitemap.js — PRP Treatment UK
 * ──────────────────────────────────────────────────────────────────────────────
 * Prebuild script: auto-generates /public/sitemap.xml from routesForSitemap
 * in siteConfig.js.
 *
 * Run: node scripts/generate-sitemap.js
 * Or add to package.json: "prebuild": "node scripts/generate-sitemap.js"
 * ──────────────────────────────────────────────────────────────────────────────
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Dynamic import of siteConfig (ES module)
const { siteConfig, routesForSitemap } = await import('../src/data/siteConfig.js');

const SITE_URL    = siteConfig.liveDomain;
const TODAY       = new Date().toISOString().split('T')[0];
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

const urls = routesForSitemap.map(({ path: routePath, priority, changefreq }) => {
  const loc = `${SITE_URL}${routePath === '/' ? '' : routePath}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

fs.writeFileSync(OUTPUT_PATH, xml, 'utf-8');
console.log(`✅ Sitemap generated → ${OUTPUT_PATH} (${routesForSitemap.length} URLs)`);
