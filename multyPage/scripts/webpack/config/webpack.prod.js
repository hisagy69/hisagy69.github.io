const {CleanWebpackPlugin} = require('clean-webpack-plugin'),
	{ROOT_DIRECTORY} = require('../constants'),
	getCommonConfig = require('./webpack.common'),
	CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	Uglifyjs = require('uglifyjs-webpack-plugin'),
	{merge} = require('webpack-merge');
module.exports = () => {
	return merge(getCommonConfig(), {
		mode: 'production',
		devtool: false,
		module: {
			rules: [
				{
					test: /\.s(a|c)ss$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
				},
			]
		},
		plugins: [
			new CleanWebpackPlugin({root: ROOT_DIRECTORY}),
			new MiniCssExtractPlugin(),
			new Uglifyjs()
		],
		optimization: {
			minimize: true,
			minimizer: [
				new CssMinimizerPlugin()
			]
		}
	})
};