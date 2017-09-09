const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js(x)?$/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react', 'stage-2'] },
        exclude: /node_modules/,
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    {
        test: /\.less$/, 
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            query: { modules: true, localIdentName: '[local]-[hash:base64:5]' }
          },
          { loader: 'less-loader' }
        ]
      })
    }
    ],
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fr$/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      minimize: true,
    }),

    function fixExitStatusOnError() {
      this.plugin("done", function(stats) {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
          var nbErrors = stats.compilation.errors.length;
          throw new Error('Typescript compilation error: compile your code locally to see the ' + nbErrors + ' error(s)');
        }
      });
    },
  ]
}
