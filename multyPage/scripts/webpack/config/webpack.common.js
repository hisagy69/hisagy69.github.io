const HtmlWebpackPlugin = require('html-webpack-plugin'),
	{SRC_DIRECTORY, DIST_DIRECTORY,  FONTS, FONTSTO, IMG, IMGTO, MAILER, MAILERTO, SEND, SENDTO} = require('../constants'),
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
					test: /\.pug$/,
					use: ['pug-loader']
				},
				{
					test: /\.(png|jpg|svg|gif)$/,
					loader: 'file-loader',
					options: {
						outputPath: 'img'
					}
				},
				{
					test: /\.(ttf|woff|woff2|eot)$/,
					loader: 'file-loader',
					options: {
						outputPath: 'fonts'
					}
				},
				{
					test: /\.php$/,
					use: ['html-minify', 'php-loader']
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.pug',
				favicon: './src/favicon.ico'
			}),
			new HtmlWebpackPlugin({
				filename: 'search.html',
				template: './src/search.pug',
				favicon: './src/favicon.ico'
			}),
			new HtmlWebpackPlugin({
				filename: 'news.html',
				template: './src/news.pug',
				favicon: './src/favicon.ico'
			}),
			new HtmlWebpackPlugin({
				filename: 'contacts.html',
				template: './src/contacts.pug',
				favicon: './src/favicon.ico'
			}),
			new HtmlWebpackPlugin({
				filename: 'statistic.html',
				template: './src/statistic.pug',
				favicon: './src/favicon.ico'
			}),
			new HtmlWebpackPlugin({
				filename: 'article.html',
				template: './src/article.pug',
				favicon: './src/favicon.ico'
			}),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: SEND,
						to: SENDTO
					},
					{
						from: MAILER,
						to: MAILERTO
					}
				]
			})
		]
	}
};