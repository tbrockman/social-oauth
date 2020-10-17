const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV || 'production'

module.exports = {
  target: 'webworker',
  output: {
    filename: `worker.${mode}.js`,
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'cheap-module-source-map',
  mode,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env'
    })
  ],
}
