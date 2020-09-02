const calc = () => {
	const appData = {
		form: document.getElementById('card_order'),
		priceCollection: document.querySelectorAll('[name="club-name"]'),
		monthCollection: document.querySelectorAll('[name="card-type"]'),
		cardPrice: {
			schelkovo: {'1': 2999, '6': 14990, '9': 21990, '12': 24990},
			mozaika: {'1': 1990, '6': 9900, '9': 13900, '12': 19900}
		},
		month: 1,
		price: 1990,
		discount: 0,
		priceTotal: document.getElementById('price-total'),
		card: ''
	};
	if (!appData.form) {
		return;
	}
	const checkIt = collection => {
		for (let item of collection) {
			if (item.checked) {
				return item.value;
			}
		}
	};
	const calc = event => {
		const target = event.target;
		if (target.dataset.promo) {
			if (target.value.trim().toUpperCase() === 'ТЕЛО2020') {
				appData.discount = 0.3;
				target.dataset.promo = true;
			} else {
				target.dataset.promo = false;
				appData.discount = 0;
			}
		}
		if (target.matches('input')) {
			const check = checkIt(appData.monthCollection);
			if (typeof(+check) === 'number') {
				appData.month = check;
			}
			if (isNaN(check)){
				return;
			}
			appData.price = appData.cardPrice[checkIt(appData.priceCollection)][appData.month];
			appData.priceTotal.textContent = appData.price - appData.price * appData.discount;
		}
	};
	appData.form.addEventListener('change', calc);
	const promo = appData.form.querySelector('[data-promo="promo"]');
	if (!promo) return;
	promo.addEventListener('input', calc);
};
export default calc;