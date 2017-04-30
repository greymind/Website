const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const env = process.env.NODE_ENV || "development"

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: env === "development"
});

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
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins: [
        extractLess,
        new HtmlWebpackPlugin({
            template: "./client/Index.ejs",
            env: env
        })
    ],

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
