const temp = `{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "overrides": [
    {
      "files": ".prettierrc",
      "options": { "parser": "json" }
    }
  ],
  "endOfLine": "auto"
}`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
