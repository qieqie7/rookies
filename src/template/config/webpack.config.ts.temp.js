const temp = `import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as devConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WebpackBar from 'webpackbar';
// 用户自定义外部配置
import rookiesConfig from './.rookiesrc';

const isProd = process.env.NODE_ENV === 'production';

type Config = Configuration & devConfiguration;

const { outputPath = './dist' } = rookiesConfig;

const config: Config = {
  entry: path.resolve(__dirname, '../src/app.tsx'),
  output: { path: path.resolve(__dirname, '../', outputPath), filename: 'rookies.bundle.[hash:8].js' },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /.(le|c)ss$/,
        include: path.resolve(__dirname, '..', 'node_modules'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: true, hmr: !isProd, reload: true },
          },
          'css-loader', // translates CSS into CommonJS
          'less-loader', // compiles Less to CSS
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      title: 'webpack app',
      template: 'src/index.html',
      minify: {
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true, // 压缩内联css
      },
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../public'), ignore: ['.gitkeep'] }]),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    }
  },

  externals: rookiesConfig.externals,
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 10000,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true,
  //       },
  //     },
  //   },
  // },
};

export default config;`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
