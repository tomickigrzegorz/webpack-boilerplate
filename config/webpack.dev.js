const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const { cssLoaders } = require('./util');

// Configure Dev Server
const configureDevServer = () => {
  return {
    contentBase: path.resolve(__dirname, '../sources'),
    open: true,
    port: 3000,
    liveReload: true,
    hot: true,
    publicPath: '/',
    inline: true,
    watchContentBase: true,
  };
};

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',
  mode: 'development',
  target: 'web',
  devServer: configureDevServer(),
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          ...cssLoaders
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    }),
  ]
});