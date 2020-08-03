const temp = `import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import webpackBasicConfig from './webpack.config';
// 用户自定义外部配置
import rookiesConfig from './.rookiesrc';

const config: Configuration = {
  mode: 'production',
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /.(le|c)ss$/,
        include: path.resolve(__dirname, '..', 'node_modules'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: true, hmr: false, reload: true },
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:6]',
              },
            },
          },
          'less-loader', // compiles Less to CSS
        ],
      },
    ],
  },
};
export default webpackMerge(webpackBasicConfig, config);`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
