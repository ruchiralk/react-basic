// configuration for Webpack is added to the webpack.config.js file to use babel-loader

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /mode_modules/,
            use: {
                loader: "babel-loader" // tells webpack to use babel-loader for every file that has the .js extension and excludes files in the mode_modules directory for the Babel compiler
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        })
    ]
};