class ShowMenu {
	constructor(buttonSelector, menuSelector, buttonAnimate = false) {
		this.button = document.querySelector(buttonSelector);
		this.menu = document.querySelector(menuSelector);
		this.buttonAnimate = buttonAnimate;
	}
	animate(show) {
		let key = null,
			n,
			end;
		if (show) {
				n = -130;
				end = 0
			} else {
				n = 0;
				end = -130;
			}
		const animateShowHide = () => {
			show ? n += 5 : n -= 5;
			this.menu.style.transform = `translateX(${n}%)`;
			if (n !== end) {
				key = requestAnimationFrame(animateShowHide);
			} else {
				cancelAnimationFrame(key);
				return;
			}
		}
		key = requestAnimationFrame(animateShowHide);
	}
	handler() {
		this.button.classList.toggle('active');
		if (this.button.matches('.active')) {
			this.animate(true);
		} else {
			this.animate(false);
		}
	}
	pulse() {
		let key = null,
			n = 0,
			i = 0,
			max = 15,
			start = null;
		const pulseAnimate = () => {
			if (n === max)	{
				n = 0;
				i++;
				return;
			}
			n += 1;
			this.button.style.transform = `translateY(${n}px)`;
			requestAnimationFrame(pulseAnimate);
		}
		const animate = timestamp => {
			if (!start) {
				start = timestamp;
			}
			if (timestamp - start >= 1000) {
				start = timestamp;
				requestAnimationFrame(pulseAnimate);
			}
			if (i === this.buttonAnimate.iteration) return;
			key = requestAnimationFrame(animate);
		}
		key = requestAnimationFrame(animate);
	}
	init() {
		if (!this.button) return;
		if (this.buttonAnimate) this.pulse();
		this.button.addEventListener('click', this.handler.bind(this));
		if (document.documentElement.clientWidth < 1200) {
			this.menu.addEventListener('click', (event) => {
				if (!event.target.closest('a')) return;
				this.button.classList.remove('active');
				this.animate(false);
			});
		}
	}
}
export default ShowMenu;