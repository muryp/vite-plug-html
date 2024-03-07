import { readFileSync } from 'fs'
import compileLiteral from '../transformLiteral'
import { PluginOption } from 'vite'
import type { ArgsMurypJsLiteral } from '../types'

const fileRegex = /\.(ts|astro|js)$/
const excludeFolder = /\/(node_modules)\//
export default function ViteJsLiteral(configs: ArgsMurypJsLiteral): PluginOption {
  return {
    name: 'murypJsLiteral',
    async load(id) {
      if (fileRegex.test(id) && !excludeFolder.test(id)) {
        try {
          const CONTENT_FILE = readFileSync(id, 'utf8')
          const result = compileLiteral(CONTENT_FILE, configs)
          if (result) {
            return await result
          }
        } catch (err) {
          console.log('Err [file]: ', err)
        }
      }
    }
  }

}