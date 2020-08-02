const temp = `{
  "name": "\${projectName}",
  "version": "0.0.1",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "rm -rf ./dist && cross-env TS_NODE_PROJECT=\\"./config/tsconfig-for-webpack-config.json\\" NODE_ENV=\\"production\\" webpack --config ./config/webpack.config.prod.ts",
    "dev": "cross-env TS_NODE_PROJECT=\\"./config/tsconfig-for-webpack-config.json\\"  webpack-dev-server --config ./config/webpack.config.dev.ts"
  },
  "devDependencies": {
    "@babel/cli": "^7.10.5",
    "@babel/core": "^7.10.5",
    "@babel/plugin-transform-runtime": "^7.10.5",
    "@babel/preset-env": "^7.10.4",
    "@babel/preset-react": "^7.10.4",
    "@babel/preset-typescript": "^7.10.4",
    "@babel/runtime": "^7.10.5",
    "@types/copy-webpack-plugin": "^5.0.2",
    "@types/html-webpack-plugin": "^3.2.3",
    "@types/mini-css-extract-plugin": "^0.9.1",
    "@types/node": "^13.13.15",
    "@types/react": "^16.9.43",
    "@types/react-dom": "^16.9.8",
    "@types/webpack": "^4.41.21",
    "@types/webpack-dev-server": "^3.11.0",
    "@types/webpack-merge": "^4.1.5",
    "@typescript-eslint/eslint-plugin": "^2.34.0",
    "@typescript-eslint/parser": "^2.34.0",
    "babel-loader": "^8.1.0",
    "copy-webpack-plugin": "^5.1.1",
    "cross-env": "^7.0.2",
    "css-loader": "^3.6.0",
    "eslint": "^6.8.0",
    "eslint-config-standard": "^14.1.1",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-react": "^7.20.3",
    "eslint-plugin-standard": "^4.0.1",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.12.2",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.9.0",
    "prettier": "^1.19.1",
    "style-loader": "^1.2.1",
    "thread-loader": "^2.1.3",
    "ts-node": "^8.10.2",
    "typescript": "^3.9.7",
    "webpack": "^4.44.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0",
    "webpack-merge": "^4.2.2",
    "webpackbar": "^4.0.0"
  },
  "dependencies": {
    "@babel/polyfill": "^7.10.4",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
}
`;

function generateTemp(config) {
  // FIXME: 暂时用replace的方案替换关键词，后续参数不仅仅是字符串，可能是boolean
  return temp.replace(/\${(.*?)}/g, (matchStr, keyword) => {
    return config[keyword] || 'unknown keyword';
  })
}

module.exports = generateTemp;
