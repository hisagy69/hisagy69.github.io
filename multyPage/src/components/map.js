const map = locationLinksSelector => {
	if (!document.querySelector(locationLinksSelector)) return;
	const init = () => {
		const adres = document.querySelector(locationLinksSelector),
			links = document.querySelectorAll(`${locationLinksSelector}>a`);
			if (!links[0]) return;
		const linkCords = [+links[0].dataset.nord, +links[0].dataset.west],
				linkName = links[0].querySelector('strong').textContent;
		const map = new ymaps.Map('map', {
			center: linkCords,
			zoom: 17,
			controls: {}
		});
		map.behaviors.disable('scrollZoom');
		const addMarker = (coord, place) => {
			map.geoObjects.add(
				new ymaps.Placemark(coord, {
					iconCaption: place
				}, {
					preset: 'islands#redDotIcon'
				})
			);
		}
		addMarker(linkCords, linkName);
		links[0].classList.add('active');
		if (!adres) return;
		adres.addEventListener('click', event => {
			event.preventDefault();
			const link = event.target.closest(`${locationLinksSelector}>a`),
				name = link.querySelector('strong').textContent;
			if (!link) return;
			const cord = [+link.dataset.nord, +link.dataset.west];
			[...links].find(item => {
				if (item.matches('.active')) {
					item.classList.remove('active');
					return item;
				}
			});
			link.classList.add('active');
			addMarker(cord, name);
			map.setCenter(cord);
		});
	}
	ymaps.ready(init);
};
export default map;