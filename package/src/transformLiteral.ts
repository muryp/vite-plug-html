import { minifyCss, minifyHtml } from "./minify"
import type { ArgsMurypJsLiteral } from './type'

export default async function compileHtmlLiteral(readFile: string, { configs }: ArgsMurypJsLiteral) {
  const src = readFile.split(/(?<!\\)`/)
  if (src.length > 1) {
    let result: string[] = []
    for (let key = 0; key < src.length; key++) {

      if (key % 2 === 0) {
        const val = src[key]
        const cekHtml = val.split('html')
        const isHtml = cekHtml.length > 1 && cekHtml[cekHtml.length - 1] === ''
        const cekCss = val.split('html')
        const isCss = cekCss.length > 1 && cekCss[cekCss.length - 1] === ''
        if (isHtml) {
          result[key] = cekHtml.join('')
          if (key + 2 <= src.length) {
            const minify = minifyHtml(src[key + 1], configs?.html)
            result[key + 1] = await minify || src[key + 1]
          }
        } else if (isCss) {
          result[key] = cekCss.join('')
          if (key + 2 <= src.length) {
            const minify = minifyCss(src[key + 1], configs?.css)
            result[key + 1] = minify || src[key + 1]
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