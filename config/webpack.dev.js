const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(process.cwd(), "docs"),
            watch: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "resolve-url-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("autoprefixer"),
                                    require("postcss-preset-env")
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    }
});
