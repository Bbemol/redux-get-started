const webpack = require("webpack");
const path = require("path");

let config = {
  watch: true,
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "app.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }]
  },
  resolve: {
      modules: ['node_modules']
  }
}

module.exports = config;