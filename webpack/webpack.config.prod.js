const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // https://github.com/johnagan/clean-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // https://github.com/webpack-contrib/extract-text-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin'); // https://github.com/jantimon/html-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin'); // https://github.com/webpack-contrib/copy-webpack-plugin#ignore
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin'); // https://github.com/goldhand/sw-precache-webpack-plugin
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin') // https://github.com/numical/script-ext-html-webpack-plugin
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'); // https://github.com/dustinjackson/html-webpack-inline-source-plugin
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // https://github.com/webpack-contrib/uglifyjs-webpack-plugin

const PUBLIC_PATH = 'http://grzegorztomicki.com/';

const mod = require('./entry.js');

const entryHtmlPlugins = Object.keys(mod.html).map((entryName) => {
    return new HtmlWebpackPlugin({
        filename: `${mod.html[entryName]}.html`,
        template: `./source/templates/containers/${entryName}/${entryName}.pug`,
        path: path.join(__dirname, "../dist/"),
        chunks: [entryName],
        inject: true,
        cache: false,
        inlineSource: '.css$',
        // inlineSource: '.(js|css)$',
        file: require(`../source/templates/containers/${entryName}/${entryName}.json`),
        minify: {
            removeComments: true,
            collapseWhitespace: true
        }
    })
});

const config = {
    devtool: 'none',
    mode: "production",
    entry: mod.entry,
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "vendor/js/[name].[hash].js",
        publicPath: "./"
    },
    module: {
        rules: [
            {
                // JS
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                // CSS | SCSS
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                })],
                            }
                        },
                        {
                            loader: 'sass-loader',
                        },
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    path.resolve(__dirname, '../source/scss/main.scss')
                                ]
                            },
                        }
                    ]
                })
            },
            {
                // IMAGES
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    useRelativePath: true,
                    name: '[name].[ext]',
                }
            },
            {
                // PUG
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    self: true
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'vendor/css/[name].[hash].css',
            disable: false,
            allChunks: true
        }),
        new CleanWebpackPlugin('dist', {
            verbose: true,
            root: path.resolve('./'),
        }),
        new CopyWebpackPlugin([
            { from: 'source/assets/', to: 'assets/' },
            { from: 'source/data/', to: 'data/' },
            { from: 'source/images/favicon.ico', to: './' },
            { from: 'source/images/', to: 'images/', ignore: [ 'logo.afdesign' ] }
        ]),
        new SWPrecacheWebpackPlugin({
            cacheId: 'gt',
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            minify: true,
            navigateFallback: PUBLIC_PATH + 'index.html',
            staticFileGlobsIgnorePatterns: [
                /\.map$/,
                /manifest\.json$/,
                /css/,
                /gallery/,
                /data/
            ],
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true)
        })
    ]
    .concat(entryHtmlPlugins)
    .concat(new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'async'
    }))
    .concat(new HtmlWebpackInlineSourcePlugin())
};

module.exports = config;