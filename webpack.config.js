var path = require('path');

module.exports = {
  entry: './src/jsx/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: { presets: ['es2015', 'react']},
      include: path.join(__dirname, 'src/jsx')
    },
    {
      test: /\.less?$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "less-loader" // compiles Less to CSS
      }]
      //include: path.join(__dirname, 'src/less')
    }]
  }
};
