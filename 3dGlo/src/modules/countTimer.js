//Timer
const countTimer = deadline => {
	const timerHours = document.getElementById('timer-hours'),
				timerMinutes = document.getElementById('timer-minutes'),
				timerSeconds = document.getElementById('timer-seconds');

	const getTimeRemaining = () => {
		const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60) % 24;
				return { timeRemaining, hours, minutes, seconds };
	}
	
	const updateClock = () => {
		const timer = getTimeRemaining();
		for (let key in timer) {
			if (String(timer[key]).length === 1) {
				timer[key] = '0' + timer[key];
			}
		}
		if (timer.timeRemaining <= 0) {
			timer.hours = '00';
			timer.minutes = '00';
			timer.seconds = '00';
			clearInterval(time);
		}
		timerHours.textContent = timer.hours;
		timerMinutes.textContent = timer.minutes;
		timerSeconds.textContent = timer.seconds;
	}
	const time = setInterval(updateClock);
};

export default countTimer;