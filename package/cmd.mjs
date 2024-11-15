import { build } from 'esbuild'
import { copyFileSync, readFileSync } from 'fs'

const getPkg = JSON.parse(readFileSync('./package.json'))

const Opts = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  outdir: 'dist',
  platform: 'node',
  format: 'esm',
  outExtension: { '.js': '.mjs' },
  external: [
    'vite',
    ...Object.keys(getPkg.dependencies || {}),
    ...Object.keys(getPkg.peerDependencies || {}),
  ],
}

build(Opts)
Opts.format = 'cjs'
Opts.outExtension = { '.js': '.cjs' }
build(Opts)
copyFileSync('./type.d.ts', 'dist/html.d.ts')
