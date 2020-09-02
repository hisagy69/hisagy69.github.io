//command
const commandShow = () => {
	const command = document.getElementById('command');
	let src;

	command.addEventListener('mouseover', event => {
		const target = event.target;
		src = target.src;
		if (target.matches('.command__photo')) {
			target.src = target.dataset.img;
		}
	});
	command.addEventListener('mouseout', event => {
		if (event.target.matches('.command__photo')) {
			event.target.src = src;
		}
	});
};

export default commandShow;