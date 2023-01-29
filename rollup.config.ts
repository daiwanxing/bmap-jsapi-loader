import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import eslint from "@rollup/plugin-eslint";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: "dist/umd.js",
      format: "umd",
      name: "BMapLoader",
      compact: true,
    },
    {
      file: "dist/index.js",
      format: "es",
      compact: true,
    },
],
  plugins: [
    eslint({
      include: ["src/**/*.ts"]
    }),
    typescript({
        tsconfig: "./tsconfig.json",
        throwOnError: true,
        throwOnWarning: true,
    }),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [".js", ".ts"],
    }),
  ],
});
