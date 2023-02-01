const bd = document.querySelector("body");

const para1 = document.createElement('p');

const para2 = document.createElement('p');

const header1 = document.createElement('h1');

const header3 = document.createElement('h3');

const div = document.createElement('div');

para1.textContent = "Hey I'm red!";
para1.style["color"] = "red";

para2.textContent = "ME TOO";

header1.textContent = "I'm in a div";

header3.textContent = "Hey I'm a blue h3!";
header3.style["color"] = "blue";

div.style.cssText = "border: 2px solid black; background-color: pink;";

bd.appendChild(para1);
bd.appendChild(header3);
div.appendChild(header1);
div.appendChild(para2);
bd.appendChild(div);