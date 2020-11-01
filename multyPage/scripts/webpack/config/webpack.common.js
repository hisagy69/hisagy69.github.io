const HtmlWebpackPlugin = require('html-webpack-plugin'),
	{SRC_DIRECTORY, DIST_DIRECTORY,  FONTS, FONTSTO, IMG, IMGTO} = require('../constants'),
	CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
	return {
		entry: [SRC_DIRECTORY],
		output: {
			path: DIST_DIRECTORY
		},
		
		module: {
			rules: [
				{
					test: /.js$/,
					use: {
						loader: 'babel-loader'
					}
				},
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
				{
					test: /\.(png|jpg|svg|gif)$/,
					use: ['file-loader']//позволяеь работать с файлами помимо js
				},
				{
					test: /\.(ttf|woff|woff2|eot)$/,
					use: ['file-loader']
				},
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.pug',
				favicon: './src/favicon.ico'
			}),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: FONTS,
						to: FONTSTO
					},
					{
						from: IMG,
						to: IMGTO
					}
				]
			})
		]
	}
};