const temp = `import { HotModuleReplacementPlugin, Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import webpackBasicConfig from './webpack.config';
// 用户自定义外部配置
import rookiesConfig from './.rookiesrc';

const config: Configuration = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(le|c)ss$/,
        exclude: path.resolve(__dirname, '..', 'node_modules'),
        use: [
          'style-loader',
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
  plugins: [
    // devServer 好像自带的，dev-middleware 需要配合
    // new HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true, // 单页面应用且使用historyApi会用到，他会让所有请求均返回特定页面，但可以配置路由规则
    port: 9527,
    open: true,
    proxy: rookiesConfig.proxy,
    overlay: true, // 编译错误时，错误是否覆盖页面
  },
};

export default webpackMerge(webpackBasicConfig, config as Configuration);`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
