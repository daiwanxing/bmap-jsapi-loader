module.exports = {
    types: [
        { value: "feat", name: "feat:   ⭐一个新的功能点" },
        { value: "fix", name: "fix:     🐛一个 bug 修复" },
        { value: "docs", name: "docs:   📃只对文档改变" },
        {
            value: "refactor",
            name: "refactor: 🛠️重写某块功能的代码",
        },
        {
            value: "perf",
            name: "perf:    🚀提升某个功能点性能",
        },
        {
            value: "chore",
            name: "chore:    🪄对非库代码功能的调整",
        },
    ],
    scopes: [{ name: "types" }, { name: null }],
    allowCustomScopes: false,
};
