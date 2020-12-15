module.exports = (api) => {
	api.cache.never();
	return {
		presets: [
			[
				'@babel/env',
				{
					debug: false,
					spec: true,//specification, делает код более медленным, но стабильным
					loose: false,//делает код более быстрым, но менее стабильным
					modules: false//webpack хорошо работает только c es15 модулями, поэтому false
				}
			]
		]
	};
}