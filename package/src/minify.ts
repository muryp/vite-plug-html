import { Options, minify } from 'html-minifier'
import cleanCss from 'clean-css'

const defaultOptsHtml: Options = {
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
  removeComments: true,
  collapseWhitespace: true,
}

export const minifyHtml = (val: string, opts = defaultOptsHtml) => {
  return minify(val, opts)
}

const defaultOptsCss: cleanCss.Options = {
  returnPromise: false
}
export const minifyCss = (val: string, opts = defaultOptsCss) => {
  const cssMinify = new cleanCss(opts).minify(val)
  return cssMinify.styles
}