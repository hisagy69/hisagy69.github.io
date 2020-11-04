const listShow = event => {
	const target = event.target,
		list = target.closest('.city-list'), 
		ul = document.querySelectorAll('.city-list>ul');
	if (list) {
		list.querySelector('ul').classList.toggle('d-none');
		return;
	}
	[...ul].find(item => {
		if (!item.matches('.d-none')) {
			item.classList.add('d-none');
			return item;
		}
	});
};
document.addEventListener('click', listShow);