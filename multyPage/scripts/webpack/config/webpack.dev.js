const {HotModuleReplacementPlugin} = require('webpack'),
	{ROOT_DIRECTORY, SRC_DIRECTORY, DIST_DIRECTORY} = require('../constants'),
	{merge} = require('webpack-merge'),
	getCommonConfig = require('./webpack.common');

module.exports = () => {
	return merge(getCommonConfig(), {
		mode: 'development',
		entry: [
			'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false',
		],
		devtool: 'cheap-module-eval-source-map',
		module: {
			rules: [
				{
					test: /\.s(a|c)ss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				}
			]
		},
		plugins: [
			new HotModuleReplacementPlugin()
		]
	})
};