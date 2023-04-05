const cartContainer = document.querySelector(".cart");
const cartHidden = document.querySelector(".cart__hidden");
const body = document.querySelector("body");
const cartList = document.querySelector(".cart__list");
const cartPlaceholder = document.querySelector(".cart__placeholder");
const cartClose = document.querySelector(".cart__close");
const cartOrderBtn = document.querySelector(".cart__order");
const cartCleanBtn = document.querySelector(".cart__clean");
const cartOpen = document.querySelector(".cart__open");
const btnPlus = document.querySelector('[data-action="plus"]');
const btnMinus = document.querySelector('[data-action="minus"]');
const floatingCartCounter = document.querySelector("[data-follow]");
const counterTotal = document.querySelector(".cart__total-number");
const itemPrice = document.querySelector("[data-price]");
const dishOrderBtn = document.querySelector("[data-cart]");

function handleCartOpen() {
	cartHidden.classList.remove(".cart__hidden");
	body.style = `overflow: hidden; padding-right: ${window.innerWidth - body.offsetWidth}px`;
	popup.scrollTo(0, 0);
}

function handleCartHide() {
	cartHidden.classList.add("cart__hidden");
	body.style = "overflow: auto;";
}

function handleCounter(event) {
	switch (event.target.dataset.action) {
		case "incr":
			counter.textContent = +counter.textContent + 1;
			break;
		case "decr":
			if (+counter.textContent < 2) break;
			counter.textContent = +counter.textContent - 1;
			break;
	}
}
