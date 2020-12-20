import Popup from './popup';
export default class Mail {
	constructor(formId) {
		this.form = document.getElementById(formId);
		this.message = document.createElement('div');
	}
	clearMessage() {
		this.form.querySelectorAll('input').forEach(input => {
			input.value = '';
			input.style.border = '';
		});
	}
	errorData() {
		new Popup(null, `
			<h2 class="popup__message_error">Ошибка отправки!</h2>
		`).init();
		console.error(this.response);
		this.clearMessage();
	}
	output(response) {
		cancelAnimationFrame(this.key);
		if (response.status !== 200) {
			this.message.textContent = '';
			this.response = response.status;
			throw this.errorData();
		}
		this.message.textContent = '';
		new Popup(null, `
			<h2 class="popup__message_success">Готово!</h2>
		`).init();
		this.clearMessage();
	}
	animate() {
		let i = 0,
			start = null;

		this.message.innerHTML = `
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		`;
		document.head.insertAdjacentHTML('beforeend', `
			<style>
				.loader {
					width: 40px;
					height: 40px;
					display: flex;
					flex-wrap: wrap;
					margin: auto;
				}
				.loader > div {
					width: 20px;
					height: 20px;
					background: #000;
					display: inline-block;
					opacity: 0.1;
					margin: 0;
				}
				.loader > div:nth-child(3) {
					order: 1;
				}
			</style>
		`);
		this.message.classList.add('loader');
		this.form.appendChild(this.message);
		const collection = this.message.querySelectorAll('div');
		
		const animateShow = (timestamp) => {
			if (!start) {
				start = timestamp;
			}
			if (timestamp - start < 100) {
				this.key = requestAnimationFrame(animateShow);
				return;
			}
			start = timestamp;
			collection[i].style.opacity = '0.5';
			if (i === 0) {
				collection[2].style.opacity = '0.1';
			} else if (i === 1) {
				collection[3].style.opacity = '0.1';
			} else {
				collection[i - 2].style.opacity = '0.1';
			}
			if (i === 3) {
				i = 0;
				collection[i].style.opacity = '1';
			} else {
				i++;
				collection[i].style.opacity = '1';
			}
			this.key = requestAnimationFrame(animateShow);
		}
		this.key = requestAnimationFrame(animateShow);
	}
	postData(body) {
		return fetch('./send.php', {
			method: this.form.method,
			headers: {
				'Content-Type': 'multypart/form-data'
			},
			body: JSON.stringify(body)
		});
	}
	submit(event) {
		event.preventDefault();
		this.form.insertAdjacentElement('afterend', this.message);
		const formData = new FormData(this.form);
		let body = {};
		for(let val of formData.entries()) {
			body[val[0]] = val[1];
		}console.log(body);
		this.animate();
		this.postData(body)
			.then(this.output.bind(this));
	}
	init() {
		if (!this.form) return;
		if (this.form.querySelector('.invalid-message')) {
			return;
		}
		this.form.addEventListener('submit', this.submit.bind(this));
	}
}