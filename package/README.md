# HTML & CSS minify on template literal

## Install

```bash
pnpm add -D @muryp/vite-html
```

## configs

### types

```typescript
// src/index.d.ts
declare global {
  function html(
    e: TemplateStringsArray,
    ...a: Array<string | number | (string | number)[]>
  ): string
  type Targs = {
    name?: string
    type?: string
  }
}
export {}
```

### vite

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import htmlPlug from '@muryp/vite-html/vite'

export default defineConfig({
  plugins: [htmlPlug()],
})
```

#### opts

```ts
const defaultOptsHtml: Options = {
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
  removeComments: true,
  collapseWhitespace: true,
}
const defaultOptsCss: cleanCss.Options = {
  returnPromise: false
}
type ArgsMurypJsLiteral = {
  include?: RegExp // default /\.(ts|astro|js)$/
  exclude?: RegExp // default /(\/node_modules\/|^commonjsHelpers\.js)/
  minify?: {
    html?: boolean // default true
    css?: boolean // default true
  }
  configs?: {
    html?: Options // default => defaultOptsHtml
    css?: OptionsOutput // default => defaultOptsCss
}

```

- see more option for html minifier [here](https://www.npmjs.com/package/html-minifier-terser)
- see more option for css minifier [here](https://www.npmjs.com/package/clean-css)

### Astro

```javascript
// astro.config.js
import { defineConfig } from 'astro/config'
import murypAstroMinify from '@muryp/vite-html/astro'

export default defineConfig({
  integrations: [murypAstroMinify()],
})
```
