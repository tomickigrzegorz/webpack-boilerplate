const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const PUBLIC_PATH = 'http://somesite.com/';

const OUTPUT_DIR = 'dist';

module.exports = merge(baseConfig, {
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: chunkData => {
        return chunkData.chunk.name === 'index'
          ? 'vendor/js/index.[hash].js'
          : 'vendor/js/article.[hash].js';
      },
      chunkFilename: 'vendor/js/[name].[hash].js',
    },
    module: {
      rules: [
        {
          // HTML
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
          // CSS SASS SCSS
          test: /\.(css|sass|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
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
            publicPath: '../../images',
          },
        }
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'initial'
          },
          styles: {
            name: 'commons',
            test: /\.s?css$/,
            chunks: 'all',
            minChunks: 2,
            reuseExistingChunk: false,
            enforce: true,
          }
        },
      },
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true,
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
      new CopyWebpackPlugin([
        { from: "sources/assets/", to: "assets/" },
        { from: "sources/data/", to: "data/" },
        { from: "sources/images/favicon.ico", to: "./" },
        { from: "sources/images/", to: "images/", ignore: ["logo.afdesign"] }
      ]),
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true)
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: true
      }),
    ]
});