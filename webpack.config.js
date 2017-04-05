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
      query: { presets: ['es2015', 'react'] },
      include: path.join(__dirname, 'src/jsx'),
    },
    {
      test: /\.less?$/,
      loader: "style-loader!css-loader!postcss-loader!less-loader"
    },
    {
      test: /\.(eot|woff|svg|ttf)?$/,
      loader: 'file-loader'
    }]
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
