const drawModes = { black: "BLACK", crazy: "CRAZY" };

const container = document.getElementsByClassName("canvas")[0];
let count = 16;
let mode = drawModes.black;

let size = container.clientHeight / count;
container.style.cssText = `width: ${container.clientHeight}`;

const changeModeToBlack = () => {
	mode = drawModes.black;
};

const changeModeToCrazy = () => {
	mode = drawModes.crazy;
};

const drawNewGrid = () => {
	count = parseInt(prompt("New size of the grid?", "16"));
	console.log(count);
	if (count < 1 || Number.isNaN(count)) count = 1;
	clearGrid(container);
	size = container.clientHeight / count;
	drawGrid(container, count, size);
};

const onMove = (t) => {
	if (mode === drawModes.black) {
		t.target.style.cssText += "background-color: black;";
	} else {
		let red = Math.floor(Math.random() * 255);
		let green = Math.floor(Math.random() * 255);
		let blue = Math.floor(Math.random() * 255);
		let randomColor = `background-color: rgb(${red},${green},${blue});`;
		t.target.style.cssText += randomColor;
	}
};

const clearGrid = (root) => {
	while (root.firstChild) {
		root.removeChild(root.lastChild);
	}
};

const drawGrid = (root, count, size) => {
	for (let i = 0; i < count; i++) {
		const row = document.createElement("div");
		for (let j = 0; j < count; j++) {
			const column = document.createElement("div");
			column.id = i * j;
			column.addEventListener("mousemove", onMove);
			column.classList.add("column");
			column.style.cssText = `width: ${size}px; height: ${size}px;`;
			row.appendChild(column);
		}
		row.classList.add("row");
		root.appendChild(row);
	}
};

drawGrid(container, count, size);
