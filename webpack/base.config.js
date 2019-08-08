const HtmlWebPackPlugin = require('html-webpack-plugin');

const ENTRY = require('./entry.js');

module.exports = {
  entry: ENTRY.html,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
          self: true,
        },
      },
    ],
  },
  plugins: Object.keys(ENTRY.html).map(entryName => {
    const templateName = entryName === "contact" ? "kontakt" : entryName === "about" ? "o-mnie" : "index";
    return new HtmlWebPackPlugin({
      filename: `${templateName}.html`,
      template: `./sources/templates/${entryName}.pug`,
      file: require(`../sources/data/${entryName}.json`),
      chunks: [entryName],
      mode: process.env.NODE_ENV === 'production' ? 'production': 'development'
    });
  })
};