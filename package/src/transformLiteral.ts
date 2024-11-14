import { minifyCss, minifyHtml } from './minify'
import type { ArgsMurypJsLiteral } from './type'

export default async function compileHtmlLiteral(
  readFile: string,
  { configs, minify }: ArgsMurypJsLiteral,
) {
  const src = readFile.split(/(?<!\\)`/)
  if (src.length > 1) {
    let result: string[] = []
    for (let key = 0; key < src.length; key++) {
      if (key % 2 === 0) {
        const val = src[key]
        const cekHtml = val.split(/html$/)
        const isHtml = cekHtml.length > 1 && cekHtml[cekHtml.length - 1] === ''
        const cekCss = val.split('css')
        const isCss = cekCss.length > 1 && cekCss[cekCss.length - 1] === ''
        if (isHtml) {
          result[key] = cekHtml.join('')
          if (key + 2 <= src.length) {
            const RESULT_MINIFY = minify?.html
              ? await minifyHtml(src[key + 1], configs?.html)
              : src[key + 1]
            result[key + 1] = RESULT_MINIFY || src[key + 1]
          }
        } else if (isCss) {
          result[key] = cekCss.join('')
          if (key + 2 <= src.length) {
            const RESULT_MINIFY = minify?.css
              ? minifyCss(src[key + 1], configs?.css)
              : src[key + 1]
            result[key + 1] = RESULT_MINIFY || src[key + 1]
          }
        } else {
          result[key] = cekHtml.join('')
          if (key + 2 <= src.length) {
            result[key + 1] = src[key + 1]
          }
        }
      }
    }
    return result.join('`')
  }
}
