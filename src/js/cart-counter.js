const btnPlus = document.querySelector('[data-action="plus"]');
const btnMinus = document.querySelector('[data-action="minus"]');
let counterTxt = document.querySelector("[data-counter]");
const floatingCartCounter = document.querySelector("[data-follow]");
const counterTotal = document.querySelector(".cart__total-number");
const itemPrice = document.querySelector("[data-price]");
const dishOrderBtn = document.querySelector("[data-cart]");

window.addEventListener("click", function (event) {
	if (event.target.dataset.action === "plus") {
		counterTxt.innerText = ++counterTxt.innerText;
	}

	if (event.target.dataset.action === "minus") {
		if (parseInt(counterTxt.innerText) > 1) {
			counterTxt.innerText = --counterTxt.innerText;
		}
	}
});
