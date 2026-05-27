/**
 * Analytics.js — PRP Treatment UK
 * ──────────────────────────────────────────────────────────────────────────────
 * Google Analytics 4 integration + Web Vitals reporting + local event tracking.
 *
 * GA4 is loaded via gtag.js (script injected on init).
 * Web Vitals (LCP, FID, CLS, FCP, TTFB) are sent as GA4 events.
 * Local event tracking is a lightweight fallback if GA4 is blocked.
 *
 * SETUP:
 *  1. Replace GA4_ID in siteConfig.js with your real GA4 Measurement ID
 *  2. Call Analytics.init() in main.jsx before ReactDOM.createRoot
 *  3. Call Analytics.pageView(path) in your router scroll-to-top component
 * ──────────────────────────────────────────────────────────────────────────────
 */

import { siteConfig } from '../data/siteConfig';

const GA4_ID       = siteConfig.ga4MeasurementId;
const STORAGE_KEY  = 'prp_analytics';
const IS_DEV       = import.meta.env.DEV;

// ── GA4 Loader ─────────────────────────────────────────────────────────────────
function loadGtag() {
  if (document.querySelector(`script[src*="gtag/js"]`)) return;
  if (!GA4_ID || GA4_ID.startsWith('G-XXXX')) {
    if (IS_DEV) console.warn('[Analytics] GA4 Measurement ID not configured. Replace G-XXXXXXXXXX in siteConfig.js');
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA4_ID, {
    page_path:          window.location.pathname,
    anonymize_ip:       true,    // GDPR compliance
    cookie_flags:       'SameSite=None;Secure',
    send_page_view:     false,   // We fire manually per route
    link_attribution:   true,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src   = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);
}

// ── Core gtag wrapper ──────────────────────────────────────────────────────────
function gtag(...args) {
  if (typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

// ── Local event store (fallback / debug) ───────────────────────────────────────
function getStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { events: [] };
  } catch {
    return { events: [] };
  }
}

function saveStore(store) {
  try {
    // Keep last 200 events only
    if (store.events.length > 200) store.events = store.events.slice(-200);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Storage full or unavailable — fail silently
  }
}

function storeEvent(payload) {
  if (!IS_DEV) return; // Only store locally in dev
  const store = getStore();
  store.events.push({ ...payload, ts: new Date().toISOString() });
  saveStore(store);
}

// ── Public API ─────────────────────────────────────────────────────────────────

export const Analytics = {

  /**
   * init() — Call once, as early as possible.
   * Loads GA4 script and registers Web Vitals reporting.
   */
  init() {
    loadGtag();
    this.reportWebVitals();
  },

  /**
   * pageView(path) — Fire on every route change.
   * Call from your ScrollToTop component.
   */
  pageView(path) {
    const page = path || window.location.pathname;
    gtag('event', 'page_view', {
      page_path:     page,
      page_location: `${siteConfig.liveDomain}${page}`,
      page_title:    document.title,
    });
    storeEvent({ type: 'page_view', path: page, title: document.title });
  },

  /**
   * event(name, params) — Generic GA4 event.
   *
   * Recommended names for aesthetics clinic:
   *  'generate_lead'      — contact form submit
   *  'book_consultation'  — booking form submit
   *  'call_click'         — phone number click
   *  'whatsapp_click'     — WhatsApp button click
   *  'view_treatment'     — treatment page view
   *  'download_brochure'  — brochure download
   */
  event(name, params = {}) {
    gtag('event', name, params);
    storeEvent({ type: 'event', name, ...params });
  },

  /**
   * trackBookingClick() — fires when user clicks "Book Consultation".
   * Map to GA4 conversion in Google Analytics admin.
   */
  trackBookingClick(source = 'unknown') {
    this.event('generate_lead', {
      event_category: 'Conversion',
      event_label:    `Booking CTA - ${source}`,
      value:          1,
    });
  },

  /**
   * trackCallClick() — fires when user taps phone number.
   */
  trackCallClick() {
    this.event('call_click', {
      event_category: 'Contact',
      event_label:    siteConfig.phone,
    });
  },

  /**
   * trackTreatmentView(treatmentName) — fire on treatment page load.
   */
  trackTreatmentView(treatmentName) {
    this.event('view_item', {
      event_category: 'Treatment',
      event_label:    treatmentName,
      item_name:      treatmentName,
    });
  },

  /**
   * reportWebVitals() — sends LCP, CLS, FID, FCP, TTFB to GA4.
   * Requires web-vitals package: npm install web-vitals
   */
  reportWebVitals() {
    if (typeof window === 'undefined') return;

    // Dynamic import keeps it out of the critical path
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const sendVital = ({ name, value, id }) => {
        gtag('event', name, {
          event_category:     'Web Vitals',
          event_label:        id,
          value:              Math.round(name === 'CLS' ? value * 1000 : value),
          non_interaction:    true,
        });
        if (IS_DEV) console.log(`[Web Vitals] ${name}: ${value}`);
      };
      getCLS(sendVital);
      getFID(sendVital);
      getFCP(sendVital);
      getLCP(sendVital);
      getTTFB(sendVital);
    }).catch(() => {
      // web-vitals not installed — skip silently
    });
  },

  /**
   * getLocalData() — dev utility to inspect stored events.
   */
  getLocalData() {
    return getStore();
  },

  clearLocalData() {
    localStorage.removeItem(STORAGE_KEY);
  },
};

export default Analytics;
