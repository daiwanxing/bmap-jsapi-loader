import { defineConfig } from "rollup";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  input: "./index.js",
  output: [
    {
      file: "dist/bmap-loader.es.js",
      format: "es",
      compact: true,
    },
    {
      file: "dist/bmap-loader.umd.js",
      format: "umd",
      name: "BMapLoader",
      compact: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    terser()
  ],
});
