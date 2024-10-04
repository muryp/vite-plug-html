import { defineConfig } from 'vite'
import { ViteMurypJsLiteral } from '@muryp/vite-html'

export default defineConfig({
  plugins: [
    ViteMurypJsLiteral({
      minify: {
        html: false,
        css: false,
      },
    }),
  ],
})