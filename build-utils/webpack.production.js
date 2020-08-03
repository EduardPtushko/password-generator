const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => {
    return {
        output: {
            filename: '[name].[contentHash].js',
        },
        optimization: {
            minimizer: [
                new TerserPlugin(),
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    minify: {
                        removeAttributeQuotes: true,
                        collapseWhitespace: true,
                        removeComments: true,
                    },
                }),
            ],
        },
    };
};
