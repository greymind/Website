const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const Environment = {
    dev: "development",
    prod: "production"
}

const env = process.env.NODE_ENV || Environment.dev;

const distPath = "client/dist";

const cleanPaths = [distPath];
const cleanOptions = {
    watch: true,
    //dry: env === Environment.prod
}

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: env === Environment.dev
});

module.exports = {
    entry: "./client/src/App.tsx",
    output: {
        filename: "bundle.[hash].js",
        path: path.join(__dirname, distPath)
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
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: "file-loader"
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(cleanPaths, cleanOptions),
        extractLess,
        new HtmlWebpackPlugin({
            template: "./client/Index.ejs",
            env: env
        })
    ],

    externals: {
        "jQuery": "JQuery",
        "lodash": "Lodash",
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
