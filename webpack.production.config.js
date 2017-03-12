var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var clientBuildPath = path.resolve(__dirname, 'public','build');
var clientMainPath = path.resolve(__dirname, 'src', 'main.jsx');


 module.exports = {
         name : 'client',
         target : 'web',
         entry:  [
                    clientMainPath
                ],
         output: {
             path: clientBuildPath,
             publicPath: "/public/",
             filename: 'bundleclient.js'
         },
         module: {
             loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            }]
         },
         plugins: [
            new webpack.optimize.UglifyJsPlugin({
              minimize: true,
              compress: {
                warnings: false
              }
            }),
            new webpack.DefinePlugin({
              'process.env': {
                'NODE_ENV': JSON.stringify('production')
                }
            })

        ]
    };