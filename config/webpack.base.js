const ENTRY = require('./entry.js');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const OUTPUT_DIR = 'docs';

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

// configure Ouyput
const configureOutput = () => {
  return {
    path: path.resolve(__dirname, `../${OUTPUT_DIR}`),
    filename: 'vendor/js/[name].[fullhash].js',
    chunkFilename: 'vendor/js/[name].[fullhash].js',
  }
}

// Multiple Entry
const entryHtmlPlugins = ENTRY.html.map(entryName => {
  return new HtmlWebPackPlugin({
    filename: `${entryName}.html`,
    template: `./sources/templates/${entryName}.pug`,
    DATA: require(`../sources/data/${entryName}.json`),
    chunks: [entryName],
    inject: true
  })
})

module.exports = {
  entry: {
    index: './sources/js/index.js',
    about: './sources/js/about.js',
    contact: './sources/js/contact.js'
  },
  output: configureOutput(),
  resolve: configureResolveAlias(),
  module: {
    rules: [
      configureBabelLoader(),
      configurePugLoader(),
    ],
  },
  plugins: [
    ...entryHtmlPlugins
  ]
};