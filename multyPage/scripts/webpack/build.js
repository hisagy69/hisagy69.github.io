const webpack = require('webpack'),
	chalk = require('chalk'),
	getProdConfig = require('./config/webpack.prod'),
	compiler = webpack(getProdConfig());

compiler.run((error, stats) => {
	if (error) {
		console.error(error.stack || error);
		if (error.details) {
			console.error(error.detail);
		}
		return null;
	}
	const info = stats.toString({
		hash: true,
		colors: true,
		env: true,
		modules: false
	});
	console.log(chalk.greenBright('Build compiled'));
	console.log(info);
	if (stats.hasErrors()) {
		console.log(chalk.redBright('error'));
	}
	if (stats.hasWarning) {
		console.log(chalk.YellowBright('Warning'));
	}
});