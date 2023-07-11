import { burgerMenu } from "./burgerMenu.js";
import { slider } from "./slider.js";
import { popup } from "./popup.js";

/*------ Destinations ------*/

if (window.screen.width < 391) {
	const leftBtn = document.getElementById("left");
	leftBtn.checked = true;
} else {
	const centerBtn = document.getElementById("center");
	centerBtn.checked = true;
}

window.onresize = function () {
	// console.log(window.innerWidth);
	if (window.innerWidth < 391) {
		const leftBtn = document.getElementById("left");
    const leftPic = document.getElementById("carousel-left");
		leftBtn.checked = true;
    leftPic.style.cursor = 'auto';
	} else {
		const centerBtn = document.getElementById("center");
		centerBtn.checked = true;
	}
};

slider();

/*------ Mobile Menu ------*/

burgerMenu();

/*------ Login and Register Popup Window ------*/

popup();
