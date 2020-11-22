class Valid {
	constructor({selectorValid, pattern}) {
		this.pattern = pattern;
		this.form = document.querySelector(selectorValid);
	}
	valid(event) {
		const target = event.target;
		if (!target.value) {
			this.messageInvalid(target);
			return;
		}
		const correctValue = target.value.match(this.pattern[target.dataset.type].reg);
		if (correctValue && correctValue[0] === target.value) {
			target.style.border = '1px solid green';
			if (target.nextElementSibling && target.nextElementSibling.matches('.invalid-message')) {
				target.nextElementSibling.remove();
			}
			return;
		}
		this.messageInvalid(target);
	}
	messageInvalid(input) {
		const message = document.createElement('div');
		message.classList.add('invalid-message');
		message.textContent = `некоректный ввод, введите ${this.pattern[input.dataset.type].example}`;
		input.insertAdjacentElement('afterend', message);
		input.style.border = '1px solid tomato';
	}
	init() {
		if (!this.form) return;
		this.inputs = this.form.querySelectorAll('input');
		if (!this.pattern) {
			this.pattern = {
				name: {
					reg: /[\wа-я]{2,10}/i,
					example: 'Иван'
				}, 
				phone: {
					reg: /^(\+7)|8\d{10}/,
					example: '8-983-108-0161'
				}
			}
		}
		this.form.addEventListener('change', this.valid.bind(this));
	}
}
export default Valid;