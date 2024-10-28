const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ThreeMinifierPlugin = require('@yushijinhun/three-minifier-webpack')

const htmlWebpackPlugins = require('./webpack.pages')
const htmlWebpackPartialsPlugins = require('./webpack.partials')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    articles: './src/pages/articles/articles.js',
    home: './src/pages/home/home.js',
    archive: './src/pages/archive/archive.js',
    contacts: './src/pages/contacts/contacts.js',
    kz_fruit: './src/pages/archive/kz_fruit.js',
    scrum: './src/pages/articles/scrum/scrum.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('.', 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
            cacheDirectory: true
          }
        }
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    ...htmlWebpackPlugins,
    ...htmlWebpackPartialsPlugins,
    new webpack.HotModuleReplacementPlugin(),
    new ThreeMinifierPlugin()
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
