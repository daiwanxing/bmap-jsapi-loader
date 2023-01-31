module.exports = {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    root: true,
    env: {
        browser: true,
        commonjs: true,
    },
    rules: {
        "@typescript-eslint/no-explicit-any": [2, { ignoreRestArgs: true }],
        "@typescript-eslint/no-non-null-assertion": "off",
    },
};
