import popup from './popup';
const sendForm = idForm => {
	const form = document.getElementById(idForm);
	if (!form) {
		return;
	}
	const message = document.createElement('h4');
	message.textContent = 'Идет отправка...';
	const clearMessage = () => {
		message.remove();
		[...form.elements].forEach(item => {
			if (item.tagName.toLowerCase() === 'input') {
				item.value = '';
			}
		});
	};
	const clearForm = () => {
		[...form.elements].forEach(item => {
			if (item.matches('.success')) {
				item.classList.remove('success');
			}
			item.value = '';
		});
	};
	const errorData = error => {
		console.error(error);
		clearMessage();
		const errorPopup = document.getElementById('popup-error') || document.getElementById('thanks').cloneNode(true);
		errorPopup.id = 'popup-error';
		errorPopup.querySelector('h4').textContent = 'ОШИБКА';
		errorPopup.querySelector('p').textContent = 'Отправка не удалась, повторите еще раз!'
		document.body.append(errorPopup);
		clearForm();
		popup(null, 'popup-error');
	};
	const outputData = response => {
		if (response.status !== 200) {
			throw errorData(response.status);
		}
		clearMessage();
		clearForm();
		popup(null, 'thanks');
	};
	const postData = body => {
		return fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'multypart/form-data'
			},
			body: JSON.stringify(body)
		});
	};
	form.addEventListener('submit', event => {
		event.preventDefault();
		const formData = new FormData(form);
		let body = {};
		for (let val of formData.entries()) {
			body[val[0]] = val[1];
		}

		for (let input of [...form.elements]) {
			if (input.dataset.promo && input.value) {
				body.price = document.getElementById('price-total').textContent;
				body.discount = input.dataset.promo;
			}
			if (input.matches('input.error')) {
				return;
			}
		}
		
		form.insertAdjacentElement('afterend', message);
		postData(body)
			.then(outputData)
			.catch(errorData);
	});
};

export default sendForm;