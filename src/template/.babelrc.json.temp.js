const temp = `{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "ie": "11"
        }
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
