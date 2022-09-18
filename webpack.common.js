/* eslint-disable no-undef */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
    entry: "./src/script.js",
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            }
            ]
        },
        ],
    },
};