const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const path = require("path");

function createPartialsPlugin(partialPath, location) {
    return new HtmlWebpackPartialsPlugin([
        {
            path: partialPath,
            location,
            template_filename: "*",
            priority: "replace"
        }
    ]);
}

const htmlWebpackPartialsPlugins = [
    createPartialsPlugin("./src/partials/analytics.html", "analytics")
];

module.exports = htmlWebpackPartialsPlugins;
