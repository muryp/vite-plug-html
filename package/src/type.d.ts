import { Options } from 'html-minifier'
import { OptionsOutput } from 'clean-css'

export type ArgsMurypJsLiteral = {
  minify?: {
    html?: boolean
    css?: boolean
  }
  configs?: {
    html?: Options
    css?: OptionsOutput
  }
}

declare global {
  function html(e: TemplateStringsArray, ...a: Array<string | number | (string | number)[]>): string
  type Targs = {
    name?: string
    type?: string
  }
}