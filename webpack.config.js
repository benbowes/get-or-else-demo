module.exports = {
  entry: './app/index.js',
  output: {
    path: './dist/',
    filename: './index.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: ['node_modules'],
      loader: 'babel-loader'
    }]
  },
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules'
    ]
  }
};
