document.addEventListener("DOMContentLoaded", () => {
	const cartContainer = document.querySelector(".cart");
	const cartList = document.querySelector(".cart__list");
	const dishesList = document.querySelector(".dishes__list-item");
	const cartPlaceholder = document.querySelector(".cart__placeholder");
	const cartClose = document.querySelector(".cart__close");
	const cartOrderBtn = document.querySelector(".dishes__order-button");
	const cartCleanBtn = document.querySelector(".cart__clean");
	const cartOpen = document.querySelector(".floating-btn");

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

	function addCartItem(event) {
		if (!event.target.classList.contains("dishes__order-button")) return;
		if (cartContainer.classList.contains("cart__hidden")) handleCart();
		let cart = JSON.parse(localStorage.getItem("cart")) || [];
		if (cart.some((item) => item.id === this.dataset.dishid)) {
			cart = cart.map((item) => {
				if (item.id === this.dataset.dishid) {
					item.count = item.count + 1;
				}
				return item;
			});
			localStorage.setItem("cart", JSON.stringify(cart));
			updateCart();
			return;
		}
		const title = this.querySelector(".dishes__title").textContent;
		const price = +this.querySelector(".dishes__price").textContent.slice(0, -1);
		const img = this.querySelector(".dishes__img").src;
		cart = [...cart, { title, price, img, count: 1, id: this.dataset.dishid }];
		localStorage.setItem("cart", JSON.stringify(cart));
		updateCart();
	}

	function renderCartItem(item) {
		const dish = document.createElement("div");
		dish.classList.add("cart__item");
		dish.innerHTML = `
		<div class="cart__list">
			<div class="cart__item">
				<div class="cart__item_img"><img src="${item.img}" alt="" /></div>
				<div class="cart__item_title">${item.title}</div>
				<div class="cart__item_price">
					<div data-price>400</div>
					<sup>&dollar;</sup>
				</div>
				<div class="cart__item_counter" data-dishid="${item.id}">
					<button class="cart__button_plus" data-counter="incr">+</button>
					<p class="cart__number">${item.count}</p>
					<button class="cart__button_minus" data-counter="decr"> -</button>
				</div>
			</div>
		</div>
			`;
		const cartBtns = dish.querySelectorAll(".cart__button");
		const cartCounter = dish.querySelector(".cart__number");
		cartBtns.forEach((element) => {
			element.addEventListener("click", (event) => handleCartCountUpdate(event, cartCounter));
		});
		cartList.append(dish);
	}

	function handleCartCountUpdate(event, counter) {
		let cart = JSON.parse(localStorage.getItem("cart"));
		switch (event.target.dataset.counter) {
			case "incr":
				counter.textContent = +counter.textContent + 1;
				break;
			case "decr":
				counter.textContent = +counter.textContent - 1;
				break;
		}
		cart = cart.reduce((arr, item) => {
			if (item.id === event.target.parentElement.dataset.dishid) {
				item.count = +counter.textContent;
			}
			return item.count >= 1 ? [...arr, item] : arr;
		}, []);
		localStorage.setItem("cart", JSON.stringify(cart));
		updateCart();
	}

	function updateCart() {
		let cart = JSON.parse(localStorage.getItem("cart")) || [];
		const total = cartContainer.querySelector(".cart__total-number");
		const floatingCounter = document.querySelector(".floating-btn__count");
		if (cart.length > 0) {
			cartPlaceholder.classList.add("cart__placeholder_empty");
			cartList.classList.remove("cart__list_empty");
			cartList.innerHTML = "";
			let sum = 0;
			cart.forEach((item) => {
				sum += item.count * item.price;
				renderCartItem(item);
			});
			total.textContent = sum;
			floatingCounter.textContent = cart.length;
			return;
		}
		total.textContent = 0;
		cartPlaceholder.classList.remove("cart__placeholder_empty");
		cartList.classList.add("cart__list_empty");
		floatingCounter.textContent = 0;
	}

	function cleanCart() {
		localStorage.removeItem("cart");
		updateCart();
	}

	function handleCart() {
		cartContainer.classList.toggle("cart__hidden");
		cartOpen.classList.toggle("floating-btn_hidden");
	}

	if (localStorage.getItem("cart")) {
		updateCart();
	}

	const observer = new MutationObserver((list, observer) => {
		list.forEach(({ addedNodes }) => {
			addedNodes[0]?.addEventListener("click", addCartItem);
		});
	});
	observer.observe(dishesList, { childList: true });

	cartClose.addEventListener("click", handleCart);
	cartOpen.addEventListener("click", handleCart);
	cartOrderBtn.addEventListener("click", () => {
		handleCart();
	});
	cartCleanBtn.addEventListener("click", cleanCart);
});
