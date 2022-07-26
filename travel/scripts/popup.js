export const popup = () => {
	const popupWindow = document.getElementsByClassName("popup")[0];
	const loginBtn = document.getElementById("login");
	const accountLink = document.getElementById("account");
	const popupShadow = document.getElementsByClassName("popup-shadow")[0];
	const signinBtn = document.getElementsByClassName("signin-btn")[0];

	const popupOpen = (event) => {
		popupShadow.classList.add("active");
		popupWindow.classList.add("open");
	};

	const popupClose = () => {
		const email = document.getElementById("email");
    const password = document.getElementById("password");
		email.value = "";
    password.value = "";
		popupShadow.classList.remove("active");
		popupWindow.classList.remove("open");
	};

	const closeAndAlert = () => {
		const email = document.getElementById("email");
		const emailValue = email.value ? email.value : "no data";
		const password = document.getElementById("password");
		const passwordValue = password.value ? password.value : "no data";
		alert(`E-mail: ${emailValue} \nPassword: ${passwordValue}`);
	};

	loginBtn.addEventListener("click", popupOpen);
	accountLink.addEventListener("click", popupOpen);
	popupShadow.addEventListener("click", popupClose);
	signinBtn.addEventListener("click", closeAndAlert);
};
