const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	devServer: {
		open: 'Opera'
	},
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(ico)$/,
				use: ['file-loader']
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				loader: 'file-loader',
				options: {
					name: '[contenthash].[ext]',
					outputPath: 'fonts'
				}
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[contenthash].[ext]',
					outputPath: 'img'
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			favicon: resolve(__dirname, './src/favicon.ico'),
			template: './src/index.html',
			minify: true
		}), 
		new CopyWebpackPlugin(
			{
				patterns: [
					{
						from: resolve(__dirname, 'src/img'),
						to: resolve(__dirname, 'dist/img')
					}
				]
			}
		)//for correct work html image
	]
};