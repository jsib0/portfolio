module.exports = {
	name: "client",
	target: "node",
	entry: [
		'./views/index.ejs'
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js',	
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel-loader',
		}]
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.ejs']
	},

	devServer: {
		historyApiFallback: true,
		contentBase: './',
		port: 3000
	}

}