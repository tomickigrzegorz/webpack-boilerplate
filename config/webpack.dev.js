const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

// configure File Loader
const configureFileLoader = () => {
  return {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'file-loader'
  }
}

module.exports = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './config/',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './sources/scss/modules/_config.scss'
              ],
            },
          },
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