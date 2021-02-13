const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// only form HtmlWebPackPlugin
const config = [
  { site: 'index', share: 'share' },
  { site: 'about', share: 'share' },
  { site: 'contact' }
];

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

// configure HtmlWebPackPlugin
const entryHtmlPlugins = config.map(({ site, share }) => {
  return new HtmlWebPackPlugin({
    filename: `${site}.html`,
    template: `./sources/templates/${site}.pug`,
    DATA: require(`../sources/data/${site}.json`),
    chunks: [site, share],
  })
})

// configure Output
const configureOutput = () => {
  return {
    path: path.resolve(__dirname, '../docs'),
    filename: 'vendor/js/[name].[fullhash].js',
    // assetModuleFilename: 'images/static/[name].[hash][ext]',
    publicPath: './',
  }
}

module.exports = {
  entry: {
    index: {
      import: './sources/js/index.js',
      dependOn: 'share'
    },
    about: {
      import: './sources/js/about.js',
      dependOn: 'share'
    },
    contact: {
      import: './sources/js/contact.js'
    },
    share: './sources/js/module/share.js'
  },
  output: configureOutput(),
  module: {
    rules: [
      // Images: Copy image files to build folder
      // https://webpack.js.org/guides/asset-modules/#resource-assets
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/static/[name].[hash][ext]',
        },
      },
      configureBabelLoader(),
      configurePugLoader()
    ],
  },
  plugins: [
    ...entryHtmlPlugins
  ]
};