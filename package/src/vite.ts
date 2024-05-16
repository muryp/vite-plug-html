import { readFileSync } from 'fs'
import compileLiteral from './transformLiteral'
import { PluginOption } from 'vite'
import type { ArgsMurypJsLiteral } from './type'

const fileRegex = /\.(ts|astro|js)$/
const excludeFolder = /\/(node_modules)\//
export default function(
  configs?: ArgsMurypJsLiteral,
): PluginOption {
  return {
    name: 'murypJsLiteral',
    async load(filePath) {
      if (fileRegex.test(filePath) && !excludeFolder.test(filePath)) {
        try {
          const CONTENT_FILE = readFileSync(filePath, 'utf8')
          const result = compileLiteral(CONTENT_FILE, configs || {})
          if (result) {
            return await result
          }
        } catch (err) {
          console.log('Err [file]: ', err)
        }
      }
    },
  }
}