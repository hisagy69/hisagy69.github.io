//слайдер
const slider = () => {
	const slide = document.querySelectorAll('.portfolio-item'),
				portfolioDots = document.querySelector('.portfolio-dots'),
				slider = document.querySelector('.portfolio-content');
	
	let currentSlide = 0,
	interval;

	const dotRender = () => {
		slide.forEach(() => {
			portfolioDots.insertAdjacentHTML('beforeend', '<li class="dot"></li>');
		});
		document.querySelector('.dot').classList.add('dot-active');
	};
	dotRender();
	const dot = document.querySelectorAll('.dot');

	const prevSlide = (item, index, strClass) => {
		item[index].classList.remove(strClass);

	};

	const nextSlide = (item, index, strClass) => {
		item[index].classList.add(strClass);

	}

	const autoPlaySlide = () => {
		prevSlide(slide, currentSlide, 'portfolio-item-active');
		prevSlide(dot, currentSlide, 'dot-active');
		currentSlide++;
		if(currentSlide >= slide.length) {
			currentSlide = 0;
		}
		nextSlide(slide, currentSlide, 'portfolio-item-active');
		nextSlide(dot, currentSlide, 'dot-active');
	};
	const startSlide = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
	};
	const stopSlide = () => {
		clearInterval(interval);
	};
	slider.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		if (!target.matches('#arrow-right, #arrow-left, .dot')) {
			return;
		}

		prevSlide(slide, currentSlide, 'portfolio-item-active');
		prevSlide(dot, currentSlide, 'dot-active');

		if (target.matches('#arrow-right')) {
			currentSlide++;
		} else if (target.matches('#arrow-left')) {
			currentSlide--;
		} else if (target.matches('.dot')) {
			dot.forEach((item, index) => {
				if (item === target) {
					currentSlide = index;
				}
			});
		}
		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}

		if (currentSlide < 0) {
			currentSlide = slide.length - 1;
		}
		nextSlide(slide, currentSlide, 'portfolio-item-active');
		nextSlide(dot, currentSlide, 'dot-active');
	});
	slider.addEventListener('mouseover', event => {
		if (!event.target.matches('#arrow-right, #arrow-left, .dot')) {
			return;
		}
		stopSlide();
	});
	slider.addEventListener('mouseout', event => {
		if (!event.target.matches('#arrow-right, #arrow-left, .dot')) {
			return;
		}
		startSlide();
	});
	startSlide(1500);
};
export default slider;