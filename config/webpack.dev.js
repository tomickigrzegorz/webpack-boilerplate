const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');

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
  devServer: configureDevServer(),
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
                './sources/scss/modules/_global.scss'
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