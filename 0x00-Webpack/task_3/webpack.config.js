const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    performance: {
        maxAssetSize: 1000000
    },

    devServer: {
        contentBase: './public',
        port: 8564
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            }
        ]
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ]
}