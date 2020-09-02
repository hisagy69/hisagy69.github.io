//send-ajax-form
const sendForm = idForm => {
	const errorMessage = 'Что то пошло не так...',
	successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
	const form = document.getElementById(idForm);
	const statusMessage = document.createElement('div');
	let keyRequest;
	statusMessage.style.cssText = 'font-size: 2rem; color: #fff';

	const animate = () => {
		let start = null,
			prevItem = null,
			fantom = null,
			i = 0;

		statusMessage.innerHTML = `
			<div class="animate">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		`;

		const loader = document.querySelector('.animate'),
					divCollection = loader.querySelectorAll('div');

		statusMessage.querySelector('.animate').style.cssText = `
			width: 40px;
			height: 40px;
			display: flex;
			flex-wrap: wrap;
			margin: auto;
		`;
		divCollection[2].style.order = 1;
		[...divCollection].forEach(item => {
			item.style.cssText = `
				width: 20px;
				height: 20px;
				background: #000;
				display: inline-block;
				opacity: 0.1;
				margin: 0;
			`;
		});

		const animateFrame = timestamp => {
			if (!start) start = timestamp;
			if (timestamp - start >= 100) {
				divCollection[i].style.opacity = 1;
				if (prevItem) prevItem.style.opacity = 0.5;
				if (fantom) fantom.style.opacity = 0;
				fantom = prevItem;
				prevItem = divCollection[i];
				if (i === 3) {
					i = 0;
					start = timestamp;
					keyRequest = requestAnimationFrame(animateFrame);
					return;
				}
					i++;
					start = timestamp;
				}
				keyRequest = requestAnimationFrame(animateFrame);
			};
			keyRequest = requestAnimationFrame(animateFrame);
	};

	const outputData = response => {
		if (response.status !== 200) {
			throw errorData(response.status);
		}
		cancelAnimationFrame(keyRequest);
		statusMessage.textContent = successMessage;
		[...form.elements].forEach(item => {
			if (item.tagName.toLowerCase() === 'input') {
				item.value = '';
			}
		});
		setTimeout(() => statusMessage.textContent = '', 3000);
	};
	const errorData = error => {
		cancelAnimationFrame(keyRequest);
		statusMessage.textContent = errorMessage;
		console.error(error);
	};
	const postData = body => {
		return fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
	};
	form.addEventListener('submit', event => {
		for (let item of [...form.elements]) {
			if (item.classList.contains('error')) {
				return;
			}
		}
		event.preventDefault();
		form.append(statusMessage);
		animate();
		postData(new FormData(form))
			.then(outputData)
			.catch(errorData);
	});
};
export default sendForm;