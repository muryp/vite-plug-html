import type { Options } from 'html-minifier-terser'
import type { OptionsOutput } from 'clean-css'

export type ArgsMurypJsLiteral = {
  include?: RegExp
  exclude?: RegExp
  minify?: {
    html?: boolean
    css?: boolean
  }
  configs?: {
    html?: Options
    css?: OptionsOutput
  }
}
