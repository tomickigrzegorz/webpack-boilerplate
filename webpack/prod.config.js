const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');



const PUBLIC_PATH = 'http://somesite.com/';

const OUTPUT_DIR = 'dist';

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vendor/js/[name].[hash].js',
    chunkFilename: 'vendor/js/[name].[hash].js',
  },
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, '../sources/images')
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
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
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
      }
    },
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
      cleanOnceBeforeBuildPatterns: [
        'vendor/*',
        '!images/*.*',
        '!assets/*.*',
        '!data/*.*'
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'vendor/css/[name].[hash].css',
      chunkFilename: 'vendor/css/[name].[hash].css',
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'gt',
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
    }),
    // new CopyWebpackPlugin([
    //   { from: "sources/images/favicon.ico", to: "./" },
    //   { from: "sources/assets/", to: "assets/" },
    //   { from: "sources/data/", to: "data/" },
    //   { from: "sources/images/", to: "images/", ignore: ["logo.afdesign"] }
    // ]),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: true
    }),
  ]
});