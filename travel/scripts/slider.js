export const slider = () => {
	const leftBtn = document.getElementById("left");
  const centerBtn = document.getElementById("center");
  const rightBtn = document.getElementById("right");
  const leftPic = document.getElementById("carousel-left");
  const centerPic = document.getElementById("carousel-center");
  const rightPic = document.getElementById("carousel-right");
  const leftArrow = document.getElementsByClassName("left-arrow")[0];
  const rightArrow = document.getElementsByClassName("right-arrow")[0];

	const setLeftPic = () => {
		leftBtn.checked = true;
    leftArrow.removeEventListener("click", leftArrowClick);
    leftArrow.classList.add("inactive");
	};

  const setCenterPic = () => {
		centerBtn.checked = true;
    leftArrow.classList.remove("inactive");
    rightArrow.classList.remove("inactive");
    leftArrow.addEventListener("click", leftArrowClick);
    rightArrow.addEventListener("click", rightArrowClick);
	};

  const setRightPic = () => {
		rightBtn.checked = true;
    rightArrow.removeEventListener("click", rightArrowClick);
    rightArrow.classList.add("inactive");
	};

  const leftArrowClick = () => {
    if(centerBtn.checked === true) {
      setLeftPic();
    } else {
      setCenterPic();
    }
  }

  const rightArrowClick = () => {
    if(centerBtn.checked === true) {
      setRightPic();
    } else {
      setCenterPic();
    }
  }

	leftPic.addEventListener("click", setLeftPic);
	centerPic.addEventListener("click", setCenterPic);
  rightPic.addEventListener("click", setRightPic);

	leftBtn.addEventListener("click", setLeftPic);
	centerBtn.addEventListener("click", setCenterPic);
  rightBtn.addEventListener("click", setRightPic);

  leftArrow.addEventListener("click", leftArrowClick);
  rightArrow.addEventListener("click", rightArrowClick);
};
