const webpack = require('webpack'),
	DevServer = require('webpack-dev-server'),
	chalk = require('chalk'),
	getDevConfig = require('./config/webpack.dev'),
	hot = require('webpack-hot-middleware'),
	{HOST, PORT} = require('./constants');

const compiler = webpack(getDevConfig());
const server = new DevServer(compiler, {
	open: true,
	host: HOST,
	port: PORT,
	historyApiFallback: true,
	overlay: true,
	quiet: true,
	clientLogLevel: 'none',
	noInfo: true,
	after: (app) => {
		app.use(
			hot(compiler, {
				log: false
			})
		);
	}
});
server.listen(PORT, HOST, () => {
	console.log(
		`${chalk.greenBright('Server listening on')} ${chalk.blueBright(
			`http://${HOST}:${PORT}`
		)}`
	);
});
