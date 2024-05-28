import { readFileSync } from 'fs'
import compileLiteral from './transformLiteral'
import { PluginOption } from 'vite'
import type { ArgsMurypJsLiteral } from './type'

export default function (configs?: ArgsMurypJsLiteral): PluginOption {
  return {
    name: 'murypJsLiteral',
    async load(filePath) {
      try {
        const fileRg = configs?.include || /\.(ts|astro|js)$/
        const excludeFolder =
          configs?.exclude || /(\/node_modules\/|^commonjsHelpers\.js|vite\/preload-helper\.js)/
        if (fileRg.test(filePath) && !excludeFolder.test(filePath)) {
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