/**
 * vite.config.js — PRP Treatment UK
 * ──────────────────────────────────────────────────────────────────────────────
 * Vite configuration optimised for:
 *  • Core Web Vitals (LCP, CLS, FID)
 *  • Bundle splitting (separates vendor, react, and page chunks)
 *  • Gzip + Brotli compression
 *  • Image optimisation signals
 *  • Cache-busting asset hashing
 * ──────────────────────────────────────────────────────────────────────────────
 */

import { defineConfig } from 'vite';
import react            from '@vitejs/plugin-react';
// import compression from 'vite-plugin-compression'; // Uncomment if installed

export default defineConfig({
  plugins: [
    react(),
    // Gzip compression (reduces bundle size ~70%)
    // compression({ algorithm: 'gzip',   ext: '.gz' }),
    // compression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],

  build: {
    // Target modern browsers — keeps bundle smaller
    target: 'es2020',

    // Chunk size warning threshold (KB)
    chunkSizeWarningLimit: 600,

    // Asset inlining threshold (files smaller than this are inlined as base64)
    assetsInlineLimit: 4096,

    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router':       ['react-router-dom'],
          'analytics':    ['web-vitals'],
        },

        // Cache-busting filenames
        chunkFileNames:  'assets/js/[name]-[hash].js',
        entryFileNames:  'assets/js/[name]-[hash].js',
        assetFileNames:  'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    // Source maps for production debugging (disable if security concern)
    sourcemap: false,

    // Minify with esbuild (faster) or terser (smaller)
    minify: 'esbuild',
  },

  // Dev server
  server: {
    port: 3000,
    open: true,
  },

  // Preview server (mirrors production)
  preview: {
    port: 4000,
    headers: {
      // Security + performance headers
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options':        'SAMEORIGIN',
      'X-XSS-Protection':       '1; mode=block',
      'Referrer-Policy':        'strict-origin-when-cross-origin',
      'Cache-Control':          'public, max-age=31536000, immutable',
    },
  },
});
