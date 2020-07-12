const temp = `{
  "name": "hola-temp",
  "version": "0.0.1",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "rm -rf ./dist && cross-env TS_NODE_PROJECT=\\"./config/tsconfig-for-webpack-config.json\\" NODE_ENV=\\"production\\" webpack --config ./config/webpack.config.prod.ts",
    "dev": "cross-env TS_NODE_PROJECT=\\"./config/tsconfig-for-webpack-config.json\\"  webpack-dev-server --config ./config/webpack.config.dev.ts"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.8.4",
    "@babel/plugin-transform-runtime": "^7.8.3",
    "@babel/preset-env": "^7.8.4",
    "@babel/preset-react": "^7.8.3",
    "@babel/preset-typescript": "^7.8.3",
    "@babel/runtime": "^7.8.4",
    "@types/copy-webpack-plugin": "^5.0.0",
    "@types/html-webpack-plugin": "^3.2.2",
    "@types/mini-css-extract-plugin": "^0.9.1",
    "@types/node": "^13.1.1",
    "@types/react": "^16.9.21",
    "@types/react-dom": "^16.9.5",
    "@types/webpack": "^4.41.0",
    "@types/webpack-dev-server": "^3.10.0",
    "@types/webpack-merge": "^4.1.5",
    "@typescript-eslint/eslint-plugin": "^2.20.0",
    "@typescript-eslint/parser": "^2.20.0",
    "babel-loader": "^8.0.6",
    "copy-webpack-plugin": "^5.1.1",
    "cross-env": "^7.0.0",
    "css-loader": "^3.4.2",
    "eslint": "^6.8.0",
    "eslint-config-standard": "^14.1.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-node": "^11.0.0",
    "eslint-plugin-prettier": "^3.1.2",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-react": "^7.18.3",
    "eslint-plugin-standard": "^4.0.1",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.11.1",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.9.0",
    "prettier": "^1.19.1",
    "style-loader": "^1.1.3",
    "ts-node": "^8.5.4",
    "typescript": "^3.7.4",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.3",
    "webpack-merge": "^4.2.2"
  },
  "dependencies": {
    "@babel/polyfill": "^7.8.3",
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  }
}
`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
