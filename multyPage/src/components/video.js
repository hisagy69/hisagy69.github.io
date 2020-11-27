const video = (buttonSelector, modalSelector) => {
	const script = document.createElement('script');
	script.src = 'https://www.youtube.com/iframe_api';
	const firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
	let player;
	const onPlayerReady = () => {
		player.playVideo();
	};
	const stopVideo = () => {
		player.stopVideo();
	};
	const onYouTubeIframeAPIReady = () => {
	player = new YT.Player('player', {
		height: '315',
		width: '560',
		videoId: '4ttLL4tLwV8',
		playerVars: {
			origin: 'https://hisagy69.github.io'
		},
		events: {
		'onReady': onPlayerReady,
		}
	});
	};

	(() => {
		const modal = document.querySelector(modalSelector);
		if (!modal) return;
		const showHide = event => {
			const target = event.target;
			if (modal.matches('.d-none') && target.closest(buttonSelector)) {
				modal.classList.remove('d-none');
				if (!player) {
					onYouTubeIframeAPIReady();
					return;
				}
				onPlayerReady();
				return;
			}
			if (!modal.matches('.d-none') && !target.closest('iframe')) {
				stopVideo();
				modal.classList.add('d-none');
				return;
			}
		}
		document.addEventListener('click', event => {
			showHide(event);
		});
	})();
}

export default video;