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
const devServerPort = 8081;

const distPath = "client/dist";
const srcPath = "client/src";

const cleanPaths = [distPath];
const cleanOptions = {
    watch: true,
    //dry: env === Environment.prod
}

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: env === Environment.dev
});

const devEntries = (env == Environment.dev)
    ? [
        `webpack-dev-server/client?http://127.0.0.1:${devServerPort}`,
        "webpack/hot/only-dev-server"
    ]
    : [];

module.exports = {
    entry: devEntries.concat(path.join(__dirname, srcPath, "App.tsx")),
    output: {
        filename: "bundle.[hash].js",
        path: path.join(__dirname, distPath),
        publicPath: ""
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.join(__dirname, srcPath),
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
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            },
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
        // "lodash": "_",
        "jquery": "jQuery",
        "react": "React",
        "react-dom": "ReactDOM",
        //"react-router": "ReactRouter",
        //"redux": "Redux",
        // "react-redux": "ReactRedux"
    },

    devServer: {
        contentBase: path.join(__dirname, distPath),
        compress: true,
        port: devServerPort,
        overlay: {
            warnings: true,
            errors: true
        },
        hot: env === Environment.dev
    }
};
