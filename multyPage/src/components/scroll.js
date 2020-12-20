(() => {
	if (document.documentElement.scrollHeight === document.documentElement.clientHeight) {
		return;
	}
	const scrollButton = document.createElement('div');
	const sectionAdvantages = document.querySelector('.advantages');
	scrollButton.classList.add('scroll-button');
	scrollButton.style.cssText = `
		display: none;
		width: 2rem;
		height: 2rem;
		background: url(${require("../img/up-arrow.svg").default}) no-repeat center / 70% #f4d733;
		position: fixed;
		right: 2rem;
		bottom: 2rem;
		z-index: 9;
		cursor: pointer;
	`;
	if (document.documentElement.scrollTop >= sectionAdvantages.offsetTop) scrollButton.style.display = 'block';
	document.body.appendChild(scrollButton);
	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop >= sectionAdvantages.offsetTop && scrollButton.style.display !== 'block') {
			scrollButton.style.display = 'block';
		} else if (document.documentElement.scrollTop < sectionAdvantages.offsetTop && scrollButton.style.display !== 'none') {
			scrollButton.style.display = 'none';
		}
	});
	scrollButton.addEventListener('click', () => {
		let key;
		const scroll = () => {
			if (document.documentElement.scrollTop <= 0) {
				document.documentElement.scrollTop = 0;
				cancelAnimationFrame(key);
				return;
			}
			document.documentElement.scrollTop -= 60;
			key = requestAnimationFrame(scroll);
		}
		key = requestAnimationFrame(scroll);
	});
})();