const HtmlWebpackPlugin = require('html-webpack-plugin'),
	{HotModuleReplacementPlugin} = require('webpack'),
	{CleanWebpackPlugin} = require('clean-webpack-plugin'),
	{ROOT_DIRECTORY, SRC_DIRECTORY, DIST_DIRECTORY} = require('./constants');
module.exports = () => {
	return {
		entry: [
			'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false',
			SRC_DIRECTORY
		],
		output: {
			path: DIST_DIRECTORY
		},
		devtool: false,
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.s[ac]ss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				},
				{
					test: /\.pug$/,
					use: ['pug-loader']
				},
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.pug',
				favicon: './src/favicon.ico'
			}),
			new CleanWebpackPlugin({root: ROOT_DIRECTORY}),
			new HotModuleReplacementPlugin(),
		]
	}
};