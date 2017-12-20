const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    browser: path.resolve(__dirname, 'src/browser'),
};


module.exports = {
    entry: path.join(paths.src, 'index.js'),
    output: {
        filename: 'app.bundle.js',
        path: paths.dist
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.src, 'index.html')
        })
    ],
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css']
    },
    devtool: 'source-map'
};