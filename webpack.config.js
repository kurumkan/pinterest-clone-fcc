const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react'
];

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `[name]${isDev ? '' : '[chunkhash:8]'}.js` // chunkhash - a unique string generated based on the file content
    // chunk hash should not be used for development - can cause memory leak
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

  resolve: {
    extensions: ['.js'], // what file extensions to expect
    modules: [ // where to look up the modules(packages)
      path.resolve(__dirname, 'src'), 'node_modules',
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
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 3000,
    proxy: {
      '^/api/*': {
        target: 'http://localhost:5000/api/',
        secure: false
      }
    },
    contentBase: './'
  }
};