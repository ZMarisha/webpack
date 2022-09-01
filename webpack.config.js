const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundlerAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './js/index.js',
    output: {
        filename: 'index.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|gif|mp3|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({
            filename: path.join('style', '[name].[contenthash].css')
        }),
        new BundlerAnalyzer()
    ],
    devServer: {
        hot: true,
        open: true
    }
}