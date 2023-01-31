
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function countDown() {
	console.log("In the function");
	for (let i = 10; i >= 0; i--) {
		count.textContent += `${i}\n`;
		await sleep(1000);
	}
}

let btn = document.querySelector('.start');
let count = document.querySelector(".count");

console.log(btn);
btn.addEventListener("click", countDown);