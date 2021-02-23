

  const path = require('path');


 module.exports = {
   mode: 'development',
   entry: './client/index.js', 
   devtool: 'inline-source-map',

   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
 }