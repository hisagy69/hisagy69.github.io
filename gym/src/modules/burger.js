//burger
const burger = () => {
	const menuButton = document.querySelector('.menu-button'),
	menu = document.querySelector('.popup-menu'),
	topMenu = document.querySelector('.top-menu');
	let position = topMenu.getBoundingClientRect().top;
	const menuShow = () => {
		if (innerWidth <= 768) {
			menuButton.style.display = 'block';
	
			menuButton.addEventListener('click', () => {
				menu.style.display = 'flex';
			});
			menu.addEventListener('click', event => {
				const target = event.target;
				if (target.matches('.close-menu-btn img') || target.closest('.scroll')) {
					menu.style.display = '';
				}
			});
			window.addEventListener('scroll', () => {
				if (document.documentElement.scrollTop > position && innerWidth < 768) {
					topMenu.style.cssText = `
						position: fixed;
						top: 0;
					`;
				}
				if (document.documentElement.scrollTop <= position) {
					topMenu.style.cssText = '';
				}
			});
		}
	}
	window.addEventListener('resize', () => {
		if (innerWidth > 768) {
			menuButton.style.display = '';
			menu.style.display = '';
			topMenu.style.cssText = '';
		} else {
			menuShow();
		}
	});
	menuShow();
};
export default burger;