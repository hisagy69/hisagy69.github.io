const popup = (selectorOpenPopup, idPopup, hideBtn) => {
	const popupBtn = document.querySelector(selectorOpenPopup),
		popup = document.getElementById(idPopup);
	if (!popup) {
		return;
	}

	if (popupBtn) {
		popupBtn.addEventListener('click', () => {
			if (hideBtn) {
				popupBtn.style.display = 'none';
			}
			popup.style.display = 'block';
		});
	} else {
		if (hideBtn) {
			popupBtn.style.display = 'none';
		}
		popup.style.display = 'block';
	}

	popup.addEventListener('click', event => {
		const target = event.target;
		if(target.classList.contains('close_icon') || target.classList.contains('close-btn') || !target.closest('.form-content')) {
			popup.style.display = '';
		}
	});
};

export default popup;