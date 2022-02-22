const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        'app': './index.tsx'
    },
    output: {
        filename: '[name].[contenthash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/, use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                      }
                }
            ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './tpl/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}