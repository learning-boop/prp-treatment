/**
 * vite.config.js — PRP Treatment UK
 */

import { defineConfig } from 'vite';
import react            from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],

  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 600,
    assetsInlineLimit: 4096,
    sourcemap: false,
    minify: 'esbuild',

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  preview: {
    port: 4000,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options':        'SAMEORIGIN',
      'X-XSS-Protection':       '1; mode=block',
      'Referrer-Policy':        'strict-origin-when-cross-origin',
      'Cache-Control':          'public, max-age=31536000, immutable',
    },
  },
});