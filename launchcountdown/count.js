
let i = 10;
const output = document.querySelector(".output");
output.innerHTML = "";
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

while(i >= 0) {
	const para = document.createElement('p');
	para.textContent = i;
	if(i == 10) {
		para.textContent = "Countdown 10";
	} else if (i == 0) {
		para.textContent = "Blast off!";
	} else {
		para.textContent = i;
	}
	output.appendChild(para);
	sleep(1000);
	i--;
}

