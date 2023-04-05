const cartContainer = document.querySelector(".cart");
const cartHidden = document.querySelector(".cart__hidden");
const cartList = document.querySelector(".cart__list");
const cartPlaceholder = document.querySelector(".cart__placeholder");
const cartClose = document.querySelector(".cart__close");
const cartOrderBtn = document.querySelector(".cart__order");
const cartCleanBtn = document.querySelector(".cart__clean");
const cartOpen = document.querySelector(".cart__open");

function openCartMenu() {
	cartOpen.addEventListener("click", function () {
		cartOpen.style.visibility = "hidden";
		cartHidden.classList.toggle("cart__hidden");
	});
}

function closeCartMenu() {
	cartClose.addEventListener("click", function () {
		cartContainer.classList.add("cart__hidden");
		cartOpen.style.visibility = "visible";
	});
}

function updateCart() {
	if (event.target.hasAttribute("data-cart")) {
		floatingCartCounter.innerText = ++floatingCartCounter.innerText;
	}
}

openCartMenu();
closeCartMenu();

window.addEventListener("click", (event) => {
	if (event.target.hasAttribute("data-cart")) {
		const dishCard = event.target.closest(".dishes__list-item");

		const prodInfo = {
			id: dishCard.dataset.id,
			imgSrc: dishCard.querySelector(".dishes__img").getAttribute("src"),
			title: dishCard.querySelector(".dishes__title").innerText,
			counter: 1,
		};

		const itemInCart = cartList.querySelector(`[data-id="${prodInfo.id}"]`);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector("[data-counter]");
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(prodInfo.counter);
		} else {
			const cartItemHtml = `
			<div class="cart__list" data-id="${prodInfo.id}">
				<div class="cart__item">
					<div class="cart__item_img"><img src="${prodInfo.imgSrc}" alt="" /></div>
					<div class="cart__item_title">${prodInfo.title}</div>
					<div class="cart__item_price">
						<div data-type="price">400</div>
						<sup>&dollar;</sup>
					</div>
					<div class="cart__item_counter">
						<button class="cart__button_plus" data-action="plus">+</button>
						<div class="cart__item_couner-txt" data-counter>${prodInfo.counter}</div>
						<button class="cart__button_minus" data-action="minus">-</button>
					</div>
				</div>
			</div>`;
			cartList.insertAdjacentHTML("beforeend", cartItemHtml);
		}
	}
	updateCart();
});
