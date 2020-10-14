const ENTRY = require('./entry.js');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// configure Resolve
const configureResolveAlias = () => {
  return {
    alias: {
      'assets': path.resolve(__dirname, '../sources/images')
    }
  }
}

// configure Babel Loader
const configureBabelLoader = () => {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  }
}

// configure Pug Loader
const configurePugLoader = () => {
  return {
    test: /\.pug$/,
    loader: 'pug-loader',
    options: {
      pretty: true,
      self: true,
    },
  }
}

module.exports = {
  entry: ENTRY.html,
  resolve: configureResolveAlias(),
  module: {
    rules: [
      configureBabelLoader(),
      configurePugLoader(),
    ],
  },
  plugins: [
    ...Object.keys(ENTRY.html).map(entryName => new HtmlWebPackPlugin({
      filename: `${entryName}.html`,
      template: `./sources/templates/${entryName}.pug`,
      DATA: require(`../sources/data/${entryName}.json`),
      chunks: [entryName],
      mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
    }))
  ]
};