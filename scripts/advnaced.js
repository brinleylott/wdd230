const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector('#mode')
const main = document.querySelector("main")

modeButton.addEventListener('click', () => {
	modeButton.classList.toggle('darkMode');
	main.classList.toggle('darkMode');
});
