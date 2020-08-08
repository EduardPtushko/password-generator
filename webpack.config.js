const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
    console.log('mode', mode);
    return webpackMerge(
        {
            mode,
            entry: ['react-hot-loader/patch', './src/index'],
            output: {
                filename: '[name].[hash].js',
                path: path.resolve(__dirname, 'dist'),
                publicPath: '/',
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
                alias: {
                    'react-dom': '@hot-loader/react-dom',
                },
            },

            module: {
                rules: [
                    {
                        test: /\.(ts|js)x?$/,
                        include: path.resolve(__dirname, 'src'),
                        use: 'babel-loader',
                    },
                    {
                        test: /\.(jp?g|png|gif|webp)$/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 5000,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.svg$/,
                        use: [
                            {
                                loader: 'svg-url-loader',
                                options: {
                                    limit: 1000,
                                },
                            },
                        ],
                    },
                ],
            },
            plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
        },
        modeConfig(mode),
        presetConfig({ mode, presets }),
    );
};
