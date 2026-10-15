import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// Served from https://deforroservice.github.io/kwrglb/ once GitHub Pages is on.
export default defineConfig({
  site: 'https://deforroservice.github.io',
  base: '/kwrglb',
  trailingSlash: 'always',
  integrations: [preact()],
});
