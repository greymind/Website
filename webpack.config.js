const webpack = require('webpack')
const path = require('path')

const  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./client/src/App.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "client/dist")
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./client/Index.ejs",
            env: process.env.NODE_ENV || "development"
        })
    ],

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
