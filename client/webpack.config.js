var path = require('path');

config = {
  entry: "../app.js",
  output: {
    filename: "bundle.js",
    path: "/build"
  },
  devtool: 'source-map' 
};

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};