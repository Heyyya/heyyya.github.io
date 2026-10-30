import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const pageFiles = [
  'about.html',
  'work.html',
  'services.html',
  'services-web-development.html',
  'services-mobile-development.html',
  'services-graphic-design.html',
  'web-development.html',
  'mobile-development.html',
  'graphic-design.html',
  'contact.html',
];

function legacyPageEntries() {
  return {
    name: 'legacy-page-entries',
    closeBundle() {
      const builtIndex = resolve('dist/index.html');
      pageFiles.forEach((file) => copyFileSync(builtIndex, resolve('dist', file)));
    },
  };
}

export default defineConfig({
  plugins: [react(), legacyPageEntries()],
  base: './',
});
