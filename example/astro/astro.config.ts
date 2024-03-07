import { defineConfig } from 'astro/config';
import { murypAstroMinify } from '@muryp/vite-html'

export default defineConfig({
  integrations: [
    murypAstroMinify({})
  ],
});