//popup
const togglePopup = () => {
	const popup = document.querySelector('.popup'),
				popupBtn = document.querySelectorAll('.popup-btn'),
				popupContent = popup.querySelector('.popup-content');
	let alfa = 0;
	let rotate = 50;

	const popupAnimation = () => {
		const animation = () => {
			popup.style.display = 'inline-block';
			alfa = (alfa * 10 + 1) / 10;
			rotate -= 5;
			popupContent.style.transform = `rotate(${rotate}deg) translateX(-50px)`;
			popup.style.opacity = alfa;
			if (alfa === 1) {
				clearInterval(interval);
				alfa = 0;
				rotate = 50;
			}
		};
		
		const interval = setInterval(animation, 40);
	};

	popupBtn.forEach(item => {
		item.addEventListener('click', () => {
			if (screen.width > 768) {
				popupAnimation();
			} else {
				popup.style.display = 'inline-block';
			}
		});
	});

	popup.addEventListener('click', event => {
		const target = event.target;
		if(!target.closest('.popup-content') || target.closest('.popup-close')) {
			popup.style.opacity = '';
			popup.style.display = '';
		}
	});
};

export default togglePopup;