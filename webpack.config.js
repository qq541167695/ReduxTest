var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
  // devtool: 'eval',
  entry: {
    app: './app/app.js',
    react: [ 'react', 'react-dom', 'immutable', 'react-immutable-render-mixin' ]
  },
  output: {
    path: 'build',
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    // new webpack.DefinePlugin({
    //     __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    // })
    new webpack.optimize.CommonsChunkPlugin('react', 'react.bundle.js'),//这是妮第三方库打包生成的文件
    new ExtractTextPlugin("css/app.css")
  ],
  eslint: {
    configFile: '.eslintrc'
  },
  /**
   * If need eslint, add it in loaders.
   * {test: /\.js$/,loader: "eslint-loader",exclude: /node_modules/,}
   */
  module: {
      loaders:[
          {
              test: /\.js|.jsx$/,
              loader: 'babel',
              query: {
                  presets: ['es2015','react']
              }
          },
          {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract("style-loader","css-loader")
          },
          {
              test: /\.eot|.svg|.ttf|.woff|.woff2$/,
              loader: "file-loader?name=font/[name].[ext]"
          }
      ]
  }
};
console.log( '___'+ExtractTextPlugin.extract("style-loader","css-loader") );
