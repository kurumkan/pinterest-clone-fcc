const webpack = require('webpack');
const path = require('path');

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
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
    new webpack.DefinePlugin({ // allows you to create global constants, they can be set at compile time
      // on the left setting NODE_ENV - global variable(window-scope)
      // on the right NODE_ENV - can be set at compile time
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};