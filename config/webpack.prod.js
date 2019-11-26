const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const PUBLIC_PATH = 'http://somesite.com/';
const OUTPUT_DIR = 'docs';

// configure Ouyput
const configureOutput = () => {
  return {
    path: path.resolve(__dirname, `../${OUTPUT_DIR}`),
    filename: 'vendor/js/[name].[hash].js',
    chunkFilename: 'vendor/js/[name].[hash].js',
  }
}

// configure File Loader
const configureFileLoader = () => {
  return {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
      outputPath: (url, resourcePath, context) => {
        if (/sources/.test(url)) {
          return url.replace('sources', '../..');
        }
      }
    },
  }
}

// configure Optimization
const configureOptimization = () => {
  return {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          minChunks: 2,
          enforce: true,
        },
      }
    },
    minimizer: [new TerserPlugin()]
  }
}

// configure MiniCssExtract
const configureMiniCssExtract = () => {
  return {
    filename: 'vendor/css/[name].[hash].css',
    chunkFilename: 'vendor/css/[name].[hash].css',
  }
}

// configure SW
const configureSW = () => {
  return {
    cacheId: 'test',
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    filename: 'sw.js',
    minify: false,
    navigateFallback: `${PUBLIC_PATH}index.html`,
    stripPrefix: OUTPUT_DIR,
    staticFileGlobs: [
      `${OUTPUT_DIR}/assets/manifest.json`,
      `${OUTPUT_DIR}/favicon.ico`,
      `${OUTPUT_DIR}/vendor/js/*.js`,
      `${OUTPUT_DIR}/vendor/css/*.css`,
      `${OUTPUT_DIR}/images/static/*.png`,
      `${OUTPUT_DIR}/images/*.ico`,
    ],
  }
}

// configure Copy
const configureCopy = () => {
  return [
    { from: "sources/images/favicon.ico", to: "./" },
    { from: "sources/assets/", to: "assets/" },
    { from: "sources/images/", to: "images/" }
  ]
}

module.exports = merge(baseConfig, {
  mode: 'production',
  output: configureOutput(),
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2
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
  optimization: configureOptimization(),
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      verbose: true
    }),
    new MiniCssExtractPlugin(
      configureMiniCssExtract()
    ),
    new SWPrecacheWebpackPlugin(
      configureSW()
    ),
    new CopyWebpackPlugin(
      configureCopy()
    ),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: true
    }),
  ]
});