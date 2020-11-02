const init = () => {
	const map = new ymaps.Map('map', {
		center: [51.146348, 71.389538],
		zoom: 17,
		controls: {}
	});
	const addMarker = (coords) => {
		coords.forEach(coord => {
			map.geoObjects.add(
				new ymaps.Placemark(coord, {}, {
					preset: 'islands#redDotIcon'
				})
			);
		}); 
	}
	addMarker([[51.146348, 71.389538], [50.065585, 72.975765], [55.732605, 52.642327], [51.149851, 71.438361]]);
}
ymaps.ready(init);