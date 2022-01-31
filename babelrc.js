module.exports = {
  presents: [
    "next/babel",
    [['@babel/preset-env', { targets: { node: 'current' } }]],
    '@babel/preset-typescript',
  ],
  plugin: [["styled-components", { "ssr": true }], "inline-reac-svg"]
}
