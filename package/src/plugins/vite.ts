import { readFileSync } from 'fs'
import compileLiteral from '../transformLiteral'
import { PluginOption } from 'vite'
import type { ArgsMurypJsLiteral } from '../types'

const fileRegex = /\.(ts|astro)$/
export default function ViteJsLiteral(configs: ArgsMurypJsLiteral): PluginOption {
  return {
    name: 'murypJsLiteral',
    load(id: string) {
      if (fileRegex.test(id)) {
        const readFile = readFileSync(id, 'utf8')
        const result = compileLiteral(readFile, configs)
        if (result) {
          return result
        }
      }
    }
  }

}