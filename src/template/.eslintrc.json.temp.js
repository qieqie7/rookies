const temp = `{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["plugin:react/recommended", "standard", "plugin:@typescript-eslint/recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": ["error", "never"],
    "prettier/prettier": "error"
  }
}`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
