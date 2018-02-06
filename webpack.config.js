module.exports = {
  entry: [
    '/server.js' 
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
    
    },
    { test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=8192' 
    }]
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000
  }
};
