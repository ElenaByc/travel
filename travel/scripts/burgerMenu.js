export const burgerMenu = () => {
	const burgerBtn = document.getElementsByClassName("header__burger-btn")[0];
	const navList = document.getElementsByClassName("header__nav-list")[0];
	const navLinks = document.getElementsByClassName("nav__link");
	const menuShadow = document.getElementsByClassName("menu-shadow")[0];

	const toggleMenu = () => {
		if (window.screen.width < 391) {
			burgerBtn.classList.toggle("active");
			navList.classList.toggle("active");
			menuShadow.classList.toggle("active");
		}
	};

	burgerBtn.addEventListener("click", toggleMenu);
	menuShadow.addEventListener("click", toggleMenu);
	for (let i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener("click", toggleMenu);
	}
};
