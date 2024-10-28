const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlWebpackPlugins = [
  createPages('./src/index.html', './index.html', ['index', 'vendors']),
  createPages('./src/pages/articles/articles.html', './articles.html', [
    'articles',
    'vendors'
  ]),
  createPages('./src/pages/home/home.html', './home.html', ['home', 'vendors']),
  createPages('./src/pages/archive/archive.html', './archive.html', [
    'archive',
    'vendors'
  ]),
  createPages('./src/pages/contacts/contacts.html', './contacts.html', [
    'contacts',
    'vendors'
  ]),

  createPages('./src/pages/archive/kz_fruit.html', './kz_fruit.html', [
    'kz_fruit',
    'vendors'
  ]),
  createPages(
    './src/pages/articles/scrum/scrum.html',
    './articles/scrum.html',
    ['scrum', 'vendors']
  )
]

module.exports = htmlWebpackPlugins
