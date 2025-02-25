const $ = document;
const navBtn = $.querySelector(".nav__btn");
const navMenu = $.querySelector(".nav-menu");
const placeLikeBtn = $.querySelectorAll(".place__like");
console.log("");
let isItLiked = false;
let isNavBtnOpen = false;

navBtn.addEventListener("click", function () {
	if (isNavBtnOpen) {
		navBtn.classList.remove("nav__btn--open");
		navMenu.style.left = "-29rem";
		isNavBtnOpen = false;
	} else {
		navBtn.classList.add("nav__btn--open");
		navMenu.style.left = "0";
		isNavBtnOpen = true;
	}
});

placeLikeBtn.forEach((btns) => {
	btns.addEventListener("click", (event) => {
		let bTn = event.target;
		if (isItLiked) {
			// liked => filled heart
			bTn.classList.remove("place__like-icon--filled");
			isItLiked = false;
		} else {
			// not liked => empty heart
			bTn.classList.add("place__like-icon--filled");
			isItLiked = true;
		}
	});
});