const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js' // chunkhash - a unique string generated based on the file content
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // attach css to DOM (within <style></style> tag)
          use: 'css-loader' // transofm import & url(...) from css to require(...)
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // if the file greater than limit put it into build directory
              // else include it into bundle.js file
              limit: 10000, // bytes,
              fallback: { // if url-loader fails - use fallback loader
                loader: 'file-loader' // loads files
              }
            }
          },
          'image-webpack-loader' // optimize image size
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor', // if there are some common code(between vendor and bundle) - place it in vendor as well
        'manifest' // map all the modules and bundle files
      ]
    }),
    new ExtractTextPlugin("styles.css"), // extract text from bundle into sepatate file,
    new HtmlWebpackPlugin({ // generate html file for us from template + add scripts & styles to that
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({ // allows you to create global constants, they can be set at compile time
      // on the left setting NODE_ENV - global variable(window-scope)
      // on the right NODE_ENV - can be set at compile time
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};