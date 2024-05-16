import { build } from "esbuild";

build({
  entryPoints: ["src/**/*.ts"],
  bundle: false,
  minify: true,
  outdir: 'dist',
  platform: 'node',
});
