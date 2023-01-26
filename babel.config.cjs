const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        chrome: "50",
      },
      modules: false
    },
  ],
];

module.exports = {
  presets
}