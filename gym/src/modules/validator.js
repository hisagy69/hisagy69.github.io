class Validator {
	constructor({selector, pattern = {}, method}) {
		this.form = document.querySelector(selector);
		this.pattern = pattern;
		this.method = method;
		this.elementsForm = null;
		this.error = new Set();
	}
	init() {
		if (this.form) {
			this.elementsForm = [...this.form.elements].filter(item => {
				return	item.tagName.toLowerCase() !== 'button' && 
				item.type !== 'button' && item.type !== 'hidden';
			});
			this.applyStyle();
			this.setPattern();
			this.elementsForm.forEach(item => item.addEventListener('change', this.checkIt.bind(this)));
			this.form.addEventListener('submit', item => {
				this.elementsForm.forEach(elem => this.checkIt({target: elem}));
				if (this.error.size) {
					item.preventDefault();
				}
			});
		}
	}
	radioValid() {
		for (let elem of [...this.form.elements]) {
			if (elem.type === 'radio' && elem.checked) {
				return true;
			}
		}
		return false;
	}
	isValid(item) {
		const validatorMethod = {
			notEmpty(item) {
				if (item.type === 'radio') {
					return this.radioValid();
				}
				if (item.value.trim() === '' || item.type === 'checkbox' && !item.checked) {
					return false;
				}
				return true;
			},
			pattern(item, pattern) {
				return pattern.test(item.value);
			}
		};
		if (this.method) {
			if (item.type === 'checkbox' || item.type === 'radio') {
				return validatorMethod.notEmpty.call(this, item);
			}
			const reg = /name|email|phone|message/;
			const method = this.method[item.name.match(reg)[0]];
			if (method) {
				return method.every(elem => validatorMethod[elem[0]](item, this.pattern[elem[1]]));
			}
		} else {
			console.warn('Необходимо передать name полей ввода и методы проверки этих полей!');
		}
		return true;
	}
	checkIt(event) {
		const target = event.target;
		if (target.dataset.promo) {
			return;
		}
		if (this.isValid(target)) {
			this.showSuccess(target);
			this.error.delete(target);
		} else {
			this.showError(target);
			this.error.add(target);
		}
	}
	showError(item) {
		item.classList.remove('success');
		item.classList.add('error');
		if (item.previousElementSibling && item.previousElementSibling.matches('.validator-error')) {
			return;
		}
		const errorDiv = document.createElement('div');
		const message = item.name === 'email' ?
		'введите email вида mail@mail.ru' :
		item.name === 'phone' ?
		'введите телефон форматом 80000000000 или +70000000000' :
		item.name === 'name' ?
		'введите имя на русском языке без пробелов':
		item.name === 'message' ?
		'сообщение не должно быть пустым и должно написанно на русском' :
		item.type === 'checkbox' ?
		'необходимо согласиться на обработку персональных данных' :
		input.type === 'radio' ?
		'необходимо выбрать' :
		'Ошибка в этом поле';
		errorDiv.textContent = message;
		errorDiv.classList.add('validator-error');
		item.insertAdjacentElement('beforebegin', errorDiv);
	}
	showSuccess(item) {
		item.classList.remove('error');
		item.classList.add('success');
		if (item.previousElementSibling && item.previousElementSibling.classList.contains('validator-error')) {
			item.previousElementSibling.remove();
		}
	}
	applyStyle() {
		let style = document.getElementById('style-valid');
		if (style) {
			return;
		}
		style = document.createElement('style');
		style.id = 'style-valid';
		style.textContent = `
			input.success {
				border: 2px solid green !important;
			}
			input.error {
				border: 2px solid red !important;
			}
			.validator-error {
				font-size: 12px;
				font-family: sans-serif;
				color: red;
			}
		`;
		document.head.append(style);
	}
	setPattern() {
		if (!this.pattern.phone) {
			this.pattern.phone = /^\+?[78]([-?()]*\d){10}$/;
		}
		if (!this.pattern.email) {
			this.pattern.email = /^\w(\w?-?_?)+@\w+\.\w{2,}$/;
		}
		if (!this.pattern.name) {
			this.pattern.name = /^[а-я]+$/i;
		}
		if (!this.pattern.message) {
			this.pattern.message = /([а-я]|\s|\d)+/gim;
		}
	}
}

export default Validator;