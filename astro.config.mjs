import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// Served from https://kwarg.co/ (Namecheap cPanel).
export default defineConfig({
  site: 'https://kwarg.co',
  base: '/',
  trailingSlash: 'always',
  integrations: [preact()],
});
