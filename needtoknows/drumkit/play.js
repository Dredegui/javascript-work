function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function press(event) {
	let key = event.keyCode;
	let element = document.querySelector(`div[data-key="${key}"]`);
	console.log(element);
	element.classList.add("playing");

	return key;
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener("keydown", event => {
	const key = press(event);
	const audiokey = document.querySelector(`audio[data-key="${key}"]`);
	audiokey.currentTime = 0;
	audiokey.play();
});

