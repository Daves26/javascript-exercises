const container = document.querySelector("#container");

const p_1 = document.createElement("p");
p_1.textContent = "Hey I'm Red!";
p_1.style.color = "red";
container.appendChild(p_1);

const h3_1 = document.createElement("h3");
h3_1.style.color = "blue";
h3_1.textContent = "I'm a blue h3!";
container.appendChild(h3_1);

const h1_1 = document.createElement("h1");
h1_1.textContent = "I'm in a div";

const p_2 = document.createElement("p");
p_2.textContent = "ME TOO!";

const div_1 = document.createElement("div");
div_1.style.backgroundColor = "pink";

div_1.appendChild(h1_1);
div_1.appendChild(p_2);

container.appendChild(div_1);
