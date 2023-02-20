import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import eslint from "@rollup/plugin-eslint";
import del from "rollup-plugin-delete";

export default defineConfig({
    input: "./src/index.ts",
    output: [
        {
            file: "./dist/index.umd.js",
            format: "umd",
            name: "_bmaploader",
            compact: true,
        },
        {
            file: "./dist/index.js",
            format: "es",
            compact: true,
        },
    ],
    plugins: [
        del({ targets: "dist/*" }),
        eslint({
            include: ["src/**/*.ts"],
            throwOnError: true,
            throwOnWarning: true,
        }),
        typescript({
            tsconfig: "./tsconfig.json",
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
