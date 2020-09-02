//калькулятор
const  calculate = (price = 100) => {
	const	calcType = document.querySelector('.calc-type'),
				calcSquare = document.querySelector('.calc-square'),
				calcDay = document.querySelector('.calc-day'),
				totalValue = document.getElementById('total'),
				calcCount = document.querySelector('.calc-count'),
				calcBlock = document.querySelector('.calc-block');

	const calcAnimate = number => {
		let keyInterval;
		const animate = () => {
			let count;
			(number > 3000) ? count = 100 : count = 30;
			const clearAnimate = () => {
				cancelAnimationFrame(keyInterval);
				return;
			};
			if (+totalValue.textContent + count >= number) {
				totalValue.textContent = Math.round(number);
				calcBlock.removeEventListener('change', clearAnimate);
				clearAnimate();
			}
			totalValue.textContent = +totalValue.textContent + count;
			calcBlock.addEventListener('blur', clearAnimate);
			keyInterval = requestAnimationFrame(animate);
		};
		keyInterval = requestAnimationFrame(animate);
	};

	const countSum = () => {
		let total = 0,
				countValue = 1,
				dayValue = 1;
		const typeValue = calcType.options[calcType.selectedIndex].value,
					squareValue = +calcSquare.value;
		totalValue.textContent = 0;
		if (calcCount.value > 1) {
			countValue += (calcCount.value - 1) / 10;
		}
		if (calcDay.value && calcDay.value < 5) {
			dayValue *= 2;
		}	else if (calcDay.value && calcDay.value < 10) {
			dayValue *= 1.5;
		}
		if (typeValue && squareValue) {
			total = price * typeValue * squareValue * countValue * dayValue;
		}
		if (calcType.value && calcSquare.value) {
			calcAnimate(total);
		}
	};

		calcBlock.addEventListener('change', event => {
			const target = event.target;
			if (target.matches('input') || target.matches('select')) {
				countSum();
			}
		});
	
	calcBlock.addEventListener('input', event => {
		const target = event.target;
		if (target.matches('input')) {
			target.value = target.value.replace(/\D/, '');
		}
	});
};

export default calculate;