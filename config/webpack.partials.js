const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const path = require('path');

function createPartialsPlugin(partialPath, location) {
  return new HtmlWebpackPartialsPlugin([
    {
      path: path.join(__dirname, partialPath),
      location,
      template_filename: '*',
      priority: 'replace'
    }
  ]);
}

const htmlWebpackPartialsPlugins = [

];

module.exports = htmlWebpackPartialsPlugins;
