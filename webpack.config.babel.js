/* eslint-disable */

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
})

const base = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'app')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style!css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'},
    ]
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}

// Config for development
const devConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    inline: true,
    progress: true,
    colors: true,
    watch: true,
    displayErrorDetails: true,
    displayCached: true,
    stats: 'errors-only',
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
  ]
}

export default {
  ...base, 
  ...devConfig,
}
