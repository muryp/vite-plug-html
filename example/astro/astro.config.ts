// astro.config.js
import { defineConfig } from 'astro/config';
import murypAstroMinify from '@muryp/vite-html/astro'

export default defineConfig({
  integrations: [
    murypAstroMinify()
  ],
});