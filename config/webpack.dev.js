const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const { cssLoaders } = require('./util');

// Configure Dev Server
const configureDevServer = () => {
  return {
    contentBase: './sources',
    open: true,
    port: 3000,
    inline: true,
    stats: "errors-only",
    hot: true,
  };
};

// configure File Loader
const configureFileLoader = () => {
  return {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'file-loader'
  }
}

module.exports = merge(baseConfig, {
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
      configureFileLoader()
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    }),
  ]
});