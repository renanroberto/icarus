const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

require('babel-polyfill')
require('dotenv').config()

const project = process.env.PROJECT
const share = process.env.SHARE === 'true'
const host = process.env.HOST
const page = process.env.PAGE

if (process.env.NODE_ENV === 'development') {
  console.log(`Project ${project} starting...`)
} else if (process.env.NODE_ENV === 'production') {
  console.log(`Building project ${project} for production`);
}

module.exports = {
  entry: ['babel-polyfill', './src'],

  output: {
    path: path.join(__dirname, 'dist/arquivos'),
    filename: `${project}.min.js`,
  },

  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    alias: {
      icarus: path.resolve(__dirname, 'src/scripts/core/icarus'),
    },
  },

  mode: process.env.NODE_ENV,
  watch: process.env.NODE_ENV === 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/templates/pages/ICARUS - ${page}.html`,
      filename: './index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'src/images/' },
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== 'production',
    }),
    new MiniCssExtractPlugin({
      filename: `${project}.min.css`,
      chunkFilename: '[id].[hash].css',
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist/'),
    port: 8080,
    host: share ? host : '',
    proxy: {
      '/arquivos': {
        target: share ? `http://${host}:8080` : 'http://localhost:8080',
        pathRewrite: { '^/arquivos': '' },
      },
    },
  },
}
