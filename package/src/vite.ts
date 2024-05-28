import { readFileSync } from 'fs'
import compileLiteral from './transformLiteral'
import { PluginOption } from 'vite'
import type { ArgsMurypJsLiteral } from './type'

const INCLUDE_FILE = /.*\/src\/.*\.(ts|astro|js)$/
export default function (configs?: ArgsMurypJsLiteral): PluginOption {
  return {
    name: 'murypJsLiteral',
    async load(filePath) {
      try {
        const fileRg = configs?.include || INCLUDE_FILE
        const excludeFolder = configs?.exclude
        const isExclude = excludeFolder ? excludeFolder.test(filePath) : false
        if (fileRg.test(filePath) && !isExclude) {
          const CONTENT_FILE = readFileSync(filePath, 'utf8')
          const result = compileLiteral(CONTENT_FILE, configs || {})
          if (result) {
            return await result
          }
        }
      } catch (err) {
        console.log('Err [file]: ', err)
      }
    },
  }
}
