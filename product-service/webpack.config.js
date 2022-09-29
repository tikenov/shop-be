const slsw = require('serverless-webpack');

module.exports = {
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/
      },
    ]
  }
};