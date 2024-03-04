import { build } from "esbuild";
import { copyFileSync, existsSync, mkdirSync, rmSync } from "fs";

rmSync('dist', { recursive: true, force: true }, (err) => {
  err && console.log('myFolder was deleted!');
})
build({
  entryPoints: ["src/**/*.ts"],
  bundle: false,
  minify: true,
  outdir: 'dist',
  platform: 'node',
});

const outputPath = 'dist'
const outputFile = outputPath + '/index.d.ts'
const input = 'src/types.d.ts'
if (!existsSync(outputPath)) {
  mkdirSync(outputPath)
}
copyFileSync(input, outputFile)