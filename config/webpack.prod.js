const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { cssLoaders } = require('./util');

// configure Optimization
const configureOptimization = () => {
  return {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}

// configure MiniCssExtract
const configureMiniCssExtract = () => {
  return {
    filename: 'vendor/css/[name].[fullhash].css',
    chunkFilename: 'vendor/css/[name].[fullhash].css',
  }
}

// configure SW
const configureSW = () => {
  return {
    clientsClaim: true,
    skipWaiting: true,
    directoryIndex: 'index.html',
    offlineGoogleAnalytics: true
  }
}

// configure Copy
const configureCopy = () => {
  return {
    patterns: [
      {
        from: 'sources/assets/',
        to: 'assets/'
      },
      {
        from: 'sources/images/',
        to: 'images/',
        globOptions: {
          ignore: ['**.svg']
        }
      },
    ]
  }
};

module.exports = merge(baseConfig, {
  mode: 'production',
  target: 'browserslist',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // set path for images
              publicPath: '../../',
            },
          },
          ...cssLoaders
        ],
      },
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
    new WorkboxPlugin.GenerateSW(
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