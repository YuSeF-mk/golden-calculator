//! ----Selection--
const display = document.querySelector("#paragraph");
const inputButtons = document.querySelectorAll(".inp");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const equalButton = document.querySelector("#equal");
const numpad = document.getElementById("numpad");
const operations1 = ["+", "-", "x", "/", ".", ""];
const operations2 = ["+", "-", "*", "x", "/"];
const characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
//! ----edit text--
display.textContent = "";
//----display properties of Objects: console.dir(display)
function inputFunc(e) {
	let endChar =
		display.textContent.length > 1
			? display.textContent.slice(-1)
			: display.textContent;
	let numbers = display.textContent.split(/[\-\+x\/]/);
	if (e.target.matches(".inp")) {
		if (e.target.id === "dot") {
			if (!operations1.includes(endChar)) {
				if (!numbers[numbers.length - 1].includes(".")) {
					display.textContent += ".";
				}
			}
		} else if (e.target.matches(".opr")) {
			if (e.target.dataset.value == "-" && endChar == "") {
				display.textContent += "-";
			}
			if (!operations1.includes(endChar)) {
				display.textContent += e.target.textContent.trim();
			} else if (operations2.includes(endChar)) {
				display.textContent =
					display.textContent.slice(0, -1) + e.target.textContent.trim();
			}
		} else {
			display.textContent += e.target.textContent.trim();
		}
	} else if (e.target.id == "clear") {
		display.textContent = "";
	} else if (e.target.id == "delete") {
		if (display.textContent.length > 1) {
			let text = display.textContent;
			let textKeep = text.slice(0, -1);
			display.textContent = textKeep;
		} else if (display.textContent.length == 1) {
			display.textContent = "";
		}else{}
	} else if (e.target.id === "equal") {
		//this is for the error produced with this kind of numbers:  05.23   005.2  006.1  0000008.3
		let value = display.textContent.replaceAll("x", "*");
		let numbersList = [];
		let num = "";
		for (const char of value) {
			if (characters.includes(char)) {
				num += char;
			} else {
				numbersList.push(Number(num));
				// parseFloat parseInt Number
				numbersList.push(char);
				num = "";
			}
		}
		numbersList.push(Number(num));
		value = "";
		value = numbersList.join("");
		try {
			if (
				eval(value) == Infinity ||
				eval(value) == -Infinity ||
				eval(value) == NaN
			) {
				display.textContent = "Error";
				setTimeout(() => {
					display.textContent = "";
				}, 500);
			} else {
				display.textContent = eval(value);
			}
		} catch (err) {
			display.textContent = "Error";
			setTimeout(() => {
				display.textContent = "";
			}, 500);
		} finally {}
	}
	display.scrollLeft = display.scrollWidth;
}
numpad.addEventListener(
	"click",
	(e) => {
		if (e.target.tagName == "BUTTON") {
			inputFunc(e);
		}
	}
);
window.addEventListener('keydown', (e) => {
	let key = e.key==="*"?"x":e.key;
  // Find the button that has the text content of the key pressed
  const btn = Array.from(inputButtons).find(b => b.textContent.trim() === key);
  if (btn) btn.click();
  if (e.key === "Enter") equalButton.click();
  if (e.key === "Backspace") deleteButton.click();
});
function createParticles() {
	const background = document.querySelector(".background");
	for (let i = 0; i < 20; i++) {
		const p = document.createElement("div");
		p.className = "particle";
		let size = Math.random() * 5 + "px";
		p.style.width = size;
		p.style.height = size;
		p.style.left = Math.random() * 100 + "%";
		p.style.top = Math.random() * 100 + "%";
		p.style.animationDelay = Math.random() * 5 + "s";
		background.appendChild(p);
	}
}
createParticles();
