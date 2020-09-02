//menu
const toggleMenu = () => {
	const menu = document.querySelector('menu'),
				closeBtn = menu.querySelector('.close-btn');

	const handlerMenu = event => {
		const target = event.target;
		if (target.closest('.menu') || target === closeBtn || target.closest('menu li > a') || (menu.classList.contains('active-menu') && !target.closest('menu'))) {
			menu.classList.toggle('active-menu');
		}
	};
	document.body.addEventListener('click', event => {
		handlerMenu(event);
	});
};

export default toggleMenu;