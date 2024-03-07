// vite.config.js
import { defineConfig } from 'vite'
import htmlPlug from '@muryp/vite-html'

export default defineConfig({
  plugins: [
    htmlPlug({title:'hello'})
  ],
})