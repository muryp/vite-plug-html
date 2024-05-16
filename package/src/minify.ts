import { Options, minify } from 'html-minifier-terser'
import cleanCss from 'clean-css'

const defaultOptsHtml: Options = {
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
  removeComments: true,
  collapseWhitespace: true,
}

export const minifyHtml = (val: string, opts = defaultOptsHtml) => {
  console.log(val)
  try {
    return minify(val, opts)
  } catch (err) {
    console.log('Err [minifyHtml]:', err)
  }
}

const defaultOptsCss: cleanCss.Options = {
  returnPromise: false
}
export const minifyCss = (val: string, opts = defaultOptsCss) => {
  try {
    const cssMinify = new cleanCss(opts).minify(val)
    return cssMinify.styles
  } catch (err) {
    console.log('Err [cssMinify]:', err)
  }
}