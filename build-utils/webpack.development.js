const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = () => {
    return {
        devtool: 'eval-cheap-module-source-map',
        devServer: {
            contentBase: './dist',
            hot: true,
            overlay: true,
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
    };
};
