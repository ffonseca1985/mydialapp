const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
    dist: path.resolve(__dirname, 'dist'),
    lib: path.resolve(__dirname, 'dist/lib')
};

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
        path: PATH.lib,
        filename: '[name].bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname + "/src",
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                exclude: /node_modules/
            },
            {
                test: /\.xml$/,
                loader: 'xml-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    stats: {
        colors: true
    },
    devServer: {
        static: { directory: PATH.dist },
        open: true,
        hot: true,
        watchFiles: ["src/**/**"],
        port: 9000
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({
        filename: '../index.html',
        inject: 'body',
        template: 'src/index.html'
    })]
};