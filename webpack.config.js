const webpack = require('webpack');
// const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const pkg = require('./package.json');

const isDev = process.argv.indexOf('development') > -1;

const extractCss = new ExtractTextPlugin({
    filename: 'vendors.[hash:8].css',
    disable: isDev
});

module.exports = {
    devtool: isDev ? 'source-map' : 'none',
    output: {
        filename: '[name].[chunkhash:8].js',
        publicPath: !isDev ? '' : ''
    },

    devServer: {
        host: '127.0.0.1',
        port: 8080,
        disableHostCheck: false,
        historyApiFallback: true,
        proxy: {
            '': {
                target: '',
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name][hash:8].[ext]',
                            publicPath: !isDev ? 'assets/' : 'assets/images/',
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/i,
                include: /node_modules/,
                use: extractCss.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { minimize: true }
                        }, {
                            loader: 'less-loader',
                            options: { javascriptEnabled: true }
                        }
                    ]

                }),
            },
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({ openAnalyzer: !isDev}),
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            __DEV__: isDev,
            __SERVER_ENV__: `"${process.env.SERVER_ENV}"`,
            __LOCAL__: process.env.LOCAL
        }),
        extractCss,
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};
