const path = require('path');
module.exports = {
    entry: path.join(__dirname, "src", "index.jsx"),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               include: `${__dirname}/src`,
               loader: 'babel-loader',
               exclude: /node_modules/,
               query: {
                   presets: ['@babel/env', '@babel/react'],
                   plugins: [
                       [
                           "@babel/plugin-proposal-class-properties",
                           {
                               "loose": true
                           }
                       ]
                   ]
               }
           },
       ],
   },

       mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public')
       }
};