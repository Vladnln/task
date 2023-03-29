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

openCartMenu();
closeCartMenu();
