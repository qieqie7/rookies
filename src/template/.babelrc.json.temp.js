const temp = `{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "ie": "11"
        },
        "useBuiltIns": "usage",
        "corejs": 2
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}
`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
