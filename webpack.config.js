var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('js'),
  entry: ["./app"],
  output: {
      path: path.resolve('build/'),
      publicPath: '/public/assets/',
      filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    contentBase: 'public'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/, 
        loader: "eslint-loader", 
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "!css-loader!autoprefixer-loader")
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "!css-loader!autoprefixer-loader!sass-loader")
      },
      {
        test: /\.(png|jpg|ttf|eot|otf)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  eslint: {
    configFile: './.eslintrc'
  }
}
