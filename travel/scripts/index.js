import { burgerMenu } from "./burgerMenu.js";
import { slider } from "./slider.js";

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
		leftBtn.checked = true;
	} else {
		const centerBtn = document.getElementById("center");
		centerBtn.checked = true;
	}
};

slider();

/*------ Mobile Menu ------*/

burgerMenu();

/*------ Self Estimation ------*/

console.log(`
1. Слайдер изображений в секции destinations +50  ✔
    ° На десктоп варианте при клике на урезанную картинку 
      слева или справа изображение меняется по принципу карусели.
      Слайдер может быть как конечным так и бесконечным - 
      данный критерий не должен влиять на оценку + 20  ✔
    ° Три точки внизу отображают "номер слайда", 
      то есть каждому слайду соответствует свой кружочек, 
      который становится активным при нахождении 
      соответствующего ему слайда в центре. 
      На мобильном варианте картинка одна, 
      но поверх нее появляются стрелочки навигации 
      (затемнять кнопку если слайдер достиг края) +20  ✔
    ° Анимации плавного перемещения для слайдера +10  ✔

2. Нажатие на кнопку Login 
   (кнопка Account в мобильной версии) 
   показывает сверстанный логин попап + 50  ✔
    ° логин попап соответствует верстке, 
      его закрытие происходит при клике вне попапа +25  ✔
    ° логин попап имеет 2 инпута (email и пароль), 
      при нажатии на кнопку Sign In показывается браузерный 
      алерт с введенными данными  +25  ✔

3. Нажатие на кнопку Register на Login попапе меняет 
   разметку попапа на разметку Sign Up попапа согласно макету. 
   (То есть нажатие не закрывает модал а просто меняет его наполнение). +25  ✔
_____________________
    Итого: 125 баллов
`);
