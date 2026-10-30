import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, cpSync, mkdirSync, readdirSync } from 'node:fs';
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
      const builtApp = resolve('dist/app.html');
      const builtIndex = resolve('dist/index.html');
      copyFileSync(builtApp, builtIndex);
      pageFiles.forEach((file) => {
        copyFileSync(builtIndex, resolve('dist', file));
      });
    },
  };
}

function publishBranchRoot() {
  return {
    name: 'publish-branch-root',
    closeBundle() {
      const outputDir = resolve('dist');
      const rootDir = resolve('.');
      for (const entry of readdirSync(outputDir, { withFileTypes: true })) {
        if (entry.name === 'app.html') continue;
        const source = resolve(outputDir, entry.name);
        const destination = resolve(rootDir, entry.name);
        if (entry.isDirectory()) {
          mkdirSync(destination, { recursive: true });
          cpSync(source, destination, { recursive: true, force: true });
        } else {
          copyFileSync(source, destination);
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), legacyPageEntries(), publishBranchRoot()],
  base: './',
  build: {
    rollupOptions: {
      input: { index: resolve('app.html') },
    },
  },
});
