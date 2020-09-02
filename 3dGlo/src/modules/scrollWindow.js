//scroll
const scrollWindow = () => {
	let interval;
	const slowScroll = event => {
		if(!event.target.closest('main a') && !event.target.closest('menu li a')) {
			return;
		}
		const target = event.target.closest('main a') || event.target.closest('menu li a');
		const block = document.querySelector(target.attributes.href.textContent);
		const animation = () => {
			document.documentElement.scrollTop += 10;
			if (document.documentElement.scrollTop >= block.offsetTop) {
				clearInterval(interval);
			}
		};
		interval = setInterval(animation, 5);
	};
	document.addEventListener('click', event => {
		if(event.target.closest('a')) {
			event.preventDefault();
			slowScroll(event);
		}
	});
};

export default scrollWindow;