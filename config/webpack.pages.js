const HtmlWebpackPlugin = require('html-webpack-plugin');

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  });
}

const htmlWebpackPlugins = [
    createPages('./src/index.html', './index.html', ['index', 'vendors']),
    createPages('./src/pages/articles/articles.html', './articles.html', ['articles', 'vendors']),
    createPages('./src/pages/about/about.html', './about.html', ['about', 'vendors']),
    createPages('./src/pages/cases/cases.html', './cases.html', ['cases', 'vendors']),
    createPages('./src/pages/interactives/interactives.html', './interactives.html', ['interactives', 'vendors']),
    createPages('./src/pages/articles/scrum/scrum.html', './articles/scrum.html', ['scrum', 'vendors']),
];

module.exports = htmlWebpackPlugins;