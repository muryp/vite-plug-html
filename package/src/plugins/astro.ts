import type { AstroIntegration } from "astro";
import ViteMurypJsLiteral from './vite';
import type { ArgsMurypJsLiteral } from '../types'

export default function murypAstroMinify(configs: ArgsMurypJsLiteral): AstroIntegration {
  return {
    name: "muryp-minify",
    hooks: {
      "astro:config:setup": async ({ command, updateConfig }) => {
        console.log('hello :', command)
        if (command !== 'dev') {
          updateConfig({
            vite: {
              plugins: [ViteMurypJsLiteral({
                minify: {
                  css: configs.minify?.css || true,
                  html: configs.minify?.html || true,
                },
                configs: configs.configs
              })]
            }
          })
        } else {
          updateConfig({
            vite: {
              plugins: [ViteMurypJsLiteral({
                minify: {
                  css: false,
                  html: false,
                },
                configs: configs.configs
              })]
            }
          })
        }
      },
    },
  };
};