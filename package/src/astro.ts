import type { AstroIntegration } from 'astro'
import ViteMurypJsLiteral from './vite'
import type { ArgsMurypJsLiteral } from './type'

// TODO: astro minify cannot be false
export default function murypAstroMinify(
  configs?: ArgsMurypJsLiteral,
): AstroIntegration {
  return {
    name: 'muryp-minify',
    hooks: {
      'astro:config:setup': async ({ command, updateConfig }) => {
        if (command !== 'dev') {
          updateConfig({
            vite: {
              plugins: [
                ViteMurypJsLiteral({
                  minify: {
                    css: configs?.minify?.html === undefined ? true : false,
                    html: configs?.minify?.css === undefined ? true : false,
                  },
                  configs: configs?.configs || {},
                }),
              ],
            },
          })
        } else {
          updateConfig({
            vite: {
              plugins: [
                ViteMurypJsLiteral({
                  minify: {
                    css: false,
                    html: false,
                  },
                  configs: configs?.configs || {},
                }),
              ],
            },
          })
        }
      },
    },
  }
}
