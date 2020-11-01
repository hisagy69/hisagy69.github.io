const {CleanWebpackPlugin} = require('clean-webpack-plugin'),
	{ROOT_DIRECTORY} = require('../constants')
	getCommonConfig = require('./webpack.common'),
	{merge} = require('webpack-merge');

module.exports = () => {
	return merge(getCommonConfig(), {
		mode: 'none',
		devtool: false,
		plugins: [
			new CleanWebpackPlugin({root: ROOT_DIRECTORY}),
		]
	})
};