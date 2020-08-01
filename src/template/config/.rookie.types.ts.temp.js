const temp = `import { ProxyConfigMap, ProxyConfigArray } from 'webpack-dev-server';
import webpack from 'webpack';

export interface rookieConfiguration {
  // webpack
  outputPath?: string;
  proxy?: ProxyConfigMap | ProxyConfigArray;
  externals?:
    | string
    | RegExp
    | webpack.ExternalsObjectElement
    | webpack.ExternalsFunctionElement
    | webpack.ExternalsElement[];
}
`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
