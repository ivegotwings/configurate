const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: ['webpack/hot/poll?1000', './js/ClientApp.jsx'],
    watch: true,
    devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    devServer: {
        hot: true,
        publicPath: '/public/',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    mode: 'development',
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }, {
                test: /\.js?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }],
                include: [path.resolve('js'), path.resolve('node_modules/preact-compat/src')],
                exclude: /node_modules/
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'raw-loader'
                }
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()]
};