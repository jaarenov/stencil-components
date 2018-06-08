const stencil = require('@stencil/webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


  module.exports = {
    // entry: './src/app.js',
    // output: {
    //   filename: 'bundle.js',
    //   path: path.resolve(__dirname, 'dist')
    // },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          ]
        })
       }
     ]
   },

    plugins: [
      new ExtractTextPlugin("styles.css"),
      new stencil.StencilPlugin()
    ]
  };