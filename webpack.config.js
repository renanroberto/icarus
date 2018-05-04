const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

require('dotenv').config()

const project = process.env.PROJECT

if (process.env.NODE_ENV === 'development') {
  console.log(`Project ${project} starting...`)
} else if (process.env.NODE_ENV === 'production') {
  console.log(`Building project ${project} for production`);
}

module.exports = {
  output: {
    path: path.join(__dirname, "dist/arquivos"),
    filename: `${project}.min.js`
  },

  mode: process.env.NODE_ENV,
  watch: process.env.NODE_ENV === 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
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
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/images/'
    }]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== 'production'
     }),
    new MiniCssExtractPlugin({
      filename: `main-${project}.css`,
      chunkFilename: "[id].[hash].css"
    })
  ]
}
