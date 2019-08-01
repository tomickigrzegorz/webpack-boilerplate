const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        // HTML
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          },
        ],
      },
      {
        // CSS SASS SCSS
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
                path: './webpack/',
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
                './sources/scss/modules/_config.scss',
                './sources/scss/modules/_mixins.scss',
              ],
            },
          },
        ],
      },
      {
        // IMAGES
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './sources/images/',
          publicPath: './sources/images/'
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    }),
  ]
});