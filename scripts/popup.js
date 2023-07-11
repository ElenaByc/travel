export const popup = () => {
	const popupWindow = document.getElementsByClassName("popup")[0];
	const loginNavLink = document.getElementById("login");
	const accountLink = document.getElementById("account");
	const popupShadow = document.getElementsByClassName("popup-shadow")[0];
	const signinBtn = document.getElementsByClassName("signin-btn")[0];
  const signupBtn = document.getElementsByClassName("signup-btn")[0];
	const registerBtn = document.getElementById("register-btn");
  const loginBtn = document.getElementById("login-btn");

	const registerTitle = document.getElementById("register-title");
	const loginTitle = document.getElementById("login-title");
	const orSeparator = document.getElementById("or");
	const facebookBtn = document.getElementsByClassName("facebook-btn")[0];
	const googleBtn = document.getElementsByClassName("google-btn")[0];
	const forgotLink = document.getElementsByClassName("popup__forgot")[0];
	const registerLink = document.getElementsByClassName("popup__register")[0];
  const loginLink = document.getElementsByClassName("popup__login")[0];

	const loginElements = [
		loginTitle,
		facebookBtn,
		googleBtn,
		orSeparator,
		signinBtn,
		forgotLink,
		registerLink,
	];
	const registerElements = [registerTitle, loginLink, signupBtn];

	const popupOpen = (event) => {
    switchToLoginPopup();
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

	const showAlert = () => {
    // setTimeout(() => {alert("HELLO!")}, 5000);
		const email = document.getElementById("email");
		const emailValue = email.value ? email.value : "no data";
		const password = document.getElementById("password");
		const passwordValue = password.value ? password.value : "no data";
		alert(`E-mail: ${emailValue} \nPassword: ${passwordValue}`);
	};

	const switchToRegisterPopup = () => {
    const email = document.getElementById("email");
		const password = document.getElementById("password");
		email.value = "";
		password.value = "";
    loginElements.forEach((el) => el.classList.add("hide"));
    registerElements.forEach((el) => el.classList.remove("hide"));
    popupWindow.classList.add("register");
  };

  const switchToLoginPopup = () => {
    const email = document.getElementById("email");
		const password = document.getElementById("password");
		email.value = "";
		password.value = "";
    loginElements.forEach((el) => el.classList.remove("hide"));
    registerElements.forEach((el) => el.classList.add("hide"));
    popupWindow.classList.remove("register");
  };

	loginNavLink.addEventListener("click", popupOpen);
	accountLink.addEventListener("click", popupOpen);
	popupShadow.addEventListener("click", popupClose);
	signinBtn.addEventListener("click", showAlert);
  signupBtn.addEventListener("click", showAlert);
	registerBtn.addEventListener("click", switchToRegisterPopup);
  loginBtn.addEventListener("click", switchToLoginPopup);
};
