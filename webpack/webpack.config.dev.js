const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

const mod = require('./entry.js');

const entryHtmlPlugins = Object.keys(mod.html).map(entryName => {
    return new HtmlWebpackPlugin({
        filename: `${mod.html[entryName]}.html`,
        template: `./source/templates/containers/${entryName}/${entryName}.pug`,
        path: path.join(__dirname, "../dist/"),
        chunks: [entryName],
        // inject: true,
        // cache: true,
        file: require(`../source/templates/containers/${entryName}/${entryName}.json`),
        mode: 'development'
    })
});

const config = {
    devtool: "eval-source-map",
    mode: "development",
    entry: mod.entry,
    output: {
        path: path.resolve(__dirname, "source"),
        filename: "[name].[hash].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                // JS
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                // CSS | SCSS
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader'
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
                            loader: 'sass-loader'
                        },
                        {
                            loader: 'sass-resources-loader', // style-resources-loader then we can use sass, less, stylus
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
                loader: "file-loader"
            },
            {
                // PUG
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                    self: true
                }
            }
        ],
    },
    plugins: [
        new SimpleProgressWebpackPlugin({
            format: 'compact'
        }),
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            // disable: false,
            allChunks: true
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false)
        }),
    ].concat(entryHtmlPlugins)
};

module.exports = config;