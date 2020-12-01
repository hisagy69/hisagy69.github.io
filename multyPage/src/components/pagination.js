const pagination = () => {
	document.addEventListener('click', event => {
		if (!event.target.closest('.news__button') || event.target.closest('.active')) return;
		event.preventDefault();
		document.querySelector('.news__button.active').classList.remove('active');
		event.target.closest('.news__button').classList.add('active');
		const newsCards = document.querySelector('.news__cards');
		if (event.target.closest('#list-button')) {
			newsCards.classList.add('active');
		} else {
			newsCards.classList.remove('active');
		}
	});
};
export default pagination;