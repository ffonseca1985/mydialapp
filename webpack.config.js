const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'angular/angular.js',
            'angular-ui-router/release/angular-ui-router.js',
            // 'angular-sanitize'
        ],
        app: ['./src/app.js'],

    },
    output: {
        path: path.resolve(__dirname, 'dist/libs'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname + "/src",
                exclude: /node_modules/
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({
        filename: '../index.html',
        inject: 'body',
        template: 'src/index.html'
    })]
};