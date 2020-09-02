const listShow = () => {
	const clubsSelect = document.querySelector('.club-select'),
			list = clubsSelect.querySelector('ul');

	document.body.addEventListener('click', event => {
		const target = event.target;
		if (!list.style.display && target.closest('.club-select')) {
			list.style.display = 'inline-block';
			return;
		}
		if (list.style.display && (target.matches('.club-select a') || !target.closest('.club-select ul'))) {
			list.style.display = '';
			return;
		}
	});
};
export default listShow;