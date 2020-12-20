export default class Popup {
	constructor(buttonSelector, content) {
		this.buttonSelector = buttonSelector;
		this.modal = document.querySelector('.popup');
		this.style = document.querySelector('.popup-style');
		this.content = content;
	}
	animateShow() {
		let key,
			start,
			valueStart = this.modal.style.opacity;
		const animate = timestamp => {
			if (!start) {
				start = timestamp;
			}
			if (timestamp - start >= 20) {
				if (valueStart === '0' && this.modal.style.opacity >= 1 || valueStart === '1' && this.modal.style.opacity <= '0'){
					if (valueStart === '0') {
						this.modal.style.opacity = 1;
					} else { 
						this.modal.style.opacity = 0;
						this.modal.style.display = 'none';
					}
					cancelAnimationFrame(key);
					return;
				}
				valueStart === '0' ? this.modal.style.opacity = (+this.modal.style.opacity + 0.1) :
				this.modal.style.opacity = (+this.modal.style.opacity - 0.1);
			}
			key = requestAnimationFrame(animate);
		};
		key = requestAnimationFrame(animate);
	}
	toggleModal() {
		if (!this.content) {this.content = `
			<div class="popup__title">${this.title}</div>
			<form class="popup__form form" id="popup-form" method="POST">
				<div class="input-wrap">
					<input class="popup__input" id="user-name" data-type="name" type="text" placeholder="Ваше имя">
				</div>
				<div class="input-wrap">
					<input class="popup__input" id="user-phone" data-type="phone" type="tel" placeholder="Ваш номер телефона">
				</div>
				<button class="button popup__button">Отправить заявку</button>
			</form>
		`};
		if (this.modal && this.title) {
			this.modal.style.display = '';
			this.modal.querySelector('.popup__title').textContent = this.title;
			return;
		}
		this.modal = document.createElement('div');
		this.modal.classList.add('popup');
		this.modal.insertAdjacentHTML('beforeend', `
			<div class="popup__dialog">
				<div class="popup__close">
					<span></span>
					<span></span>
				</div>
				${this.content}
			</div>
		`);
		if (!this.style) {
			this.style = document.createElement('style');
			this.style.textContent = `
				.popup {
					background: rgba(0, 0, 0, 0.5);
					width: 100%;
					height: 100%;
					position: fixed;
					left: 0;
					top: 0;
					z-index: 34;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.popup__dialog {
					width: 397px;
					min-height: 300px;
					padding: 0;
					background: #000 url(${require("../img/popup.jpg").default}) no-repeat 0 116% / cover;
					position: relative;
				}
				.popup__message_error {
					text-align: center;
					position: relative;
					padding-top: 2rem;
					color: tomato;
				}
				.popup__message_success {
					color: green;
					text-align: center;
					padding-top: 2 rem;
					position: relative;
				}
				.popup__dialog::before {
					content: "";
					background-color: rgba(0, 0, 0, 0.8);
					width: 100%;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;
				}
				.popup__title {
					font-size: 1.466rem;
					background-color: #33b7d2;
					color: rgb(255, 255, 255);
					line-height: 1.045;
					text-align: center;
					padding: 1.666rem 0;
					position: relative;
				}
				.popup__form {
					padding: 3.2rem 3.266rem 2rem;
					position: relative;
					display: flex;
					align-items:center;
					flex-direction: column;
				}
				.popup__input {
					font-size: 0.866rem;
					font-weight: 300;
					color: #606060;
					width: 19.333rem;
					border-radius: 50px;
					padding: 1.333rem 1.733rem;
					border: none;
					margin-bottom: 1rem
				}
				.popup__form::before {
					content: url(${require('../img/popupline.png').default});
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
				.popup__close {
					position: absolute;
					right: -17px;
					top: -17px;
					width: 17px;
					height: 17px;
					cursor: pointer;
				}
				.popup__close>span {
					background: #fff;
					height: 17px;
					width: 2px;
					display: block;
					background-color: #fff;
					position: absolute;
					left: 50%;
					top: 50%;
				}
				.popup__close>span:first-child {
					transform: translate(-50%, -50%) rotate(45deg);
				}
				.popup__close>span:last-child {
					transform: translate(-50%, -50%) rotate(-45deg);
				}
				.popup__button {
					margin-top: 0.666rem;
					text-transform: none;
				}
				@media screen and (max-width: 450px) {
					.popup__dialog {
						width: 90%;
						background-size: cover;
					}
					.popup__form::before {
						display: none;
					}
				}
				`;
			this.modal.style.opacity = 0;
			this.style.classList.add('popup-style');
			document.head.appendChild(this.style);
		}
		document.body.appendChild(this.modal);
		this.animateShow();
	}
	init() {
		const handler = event => {
			if (this.modal && (event.target.closest('.popup__close') || !event.target.closest('.popup__dialog'))) {
				this.animateShow();
			}
			if (event.target.closest(this.buttonSelector)) {
				this.button = event.target.closest(this.buttonSelector);
				if (!this.title) {
					this.title = this.button.parentNode.firstChild.textContent || 'Обратный звонок';
				}
				this.toggleModal();
			}
		};
		if (!this.buttonSelector) {
			this.toggleModal();
		}
		document.addEventListener('click', handler.bind(this));
	}
}