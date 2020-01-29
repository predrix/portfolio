const myloader = document.querySelector('#fountainG');
const main = document.querySelector('.main');

function start() {
	setTimeout(() => {
		myloader.style.opacity = 0;
		myloader.style.display = 'none';

		main.style.display = 'block';
		main.style.opacity = 1;
	}, 1800);
}
start();