var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var clientBuildPath = path.resolve(__dirname, 'public', 'build');
var clientMainPath = path.resolve(__dirname, 'src', 'main.jsx');


 module.exports = {
         name : 'client',
         target : 'web',
         entry:  [
                    clientMainPath
                ],
         output: {
             path: clientBuildPath,
             publicPath: "http://localhost:8080/build",
             filename: 'bundleclient.js'
         },
         module: {
             loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
         }]
        }
    };
