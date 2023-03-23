let metrics = {};
let formData = document.querySelectorAll(".calculating__choose-item");
let activeItem = document.querySelectorAll(".calculating__choose-item_active");
const saved = localStorage.getItem("calculator");
const clearElems = document.getElementById("clear");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const age = document.getElementById("age");
const finalResult = document.querySelector(".calculating__result span");
if (saved) {
	metrics = JSON.parse(saved);
	for (let k in metrics) {
		if (["intensity", "gender"].indexOf(k) > -1) {
			document.querySelector(`[value="${metrics[k]}"]`).checked = true;
			continue;
		}
		document.getElementById(k).value = metrics[k];
	}
	startupCondition();
}
activeItem.forEach(function (elem) {
	if (elem.parentNode.id === "gender") {
		metrics.gender = elem.id;
	} else {
		metrics.intensity = +elem.dataset.ratio;
	}
});

function getBlockContent(parentSelector, element) {
	function checkingActiveElement(elem) {
		if (elem.parentNode.id === "gender") {
			metrics.gender = elem.id;
		} else if (elem.dataset.ratio) {
			metrics.intensity = +elem.dataset.ratio;
		}
		calculateResult(metrics.gender, metrics.intensity);
	}
	const elements = document.querySelectorAll(`${parentSelector} ${element}`);
	elements.forEach(function (elem) {
		elem.addEventListener("click", function () {
			checkingActiveElement(this);
		});
	});
}

function calculateResult(gender, intensity) {
	formData.forEach((input) => {
		input.addEventListener("input", function () {
			if (input.id === "weight") {
				metrics.weight = +input.value;
			}
			if (input.id === "height") {
				metrics.height = +input.value;
			}
			if (input.id === "age") {
				metrics.age = +input.value;
			}
			calculateResult(metrics.gender, metrics.intensity);
		});
	});
	localStorage.setItem("calculator", JSON.stringify(metrics));
	if (!metrics.weight || !metrics.height || !metrics.age || !metrics.intensity) {
		result = "___";
		clearElems.style.display = "none";
	} else {
		if (metrics.gender === "female") {
			result = Math.floor(
				447.6 + 9.2 * metrics.weight + 3.1 * metrics.height - 4.3 * metrics.age * metrics.intensity
			);
		} else {
			result = Math.floor(
				88.36 + 13.4 * metrics.weight + 4.8 * metrics.height - 5.7 * metrics.age * metrics.intensity
			);
		}
		clearElems.innerHTML = "&#10060;";
		clearElems.style.display = "block";
	}
	finalResult.textContent = result;
}

function startupCondition() {
	if (metrics.weight) {
		weight.value = metrics.weight;
	}
	if (metrics.height) {
		height.value = metrics.height;
	}
	if (metrics.age) {
		age.value = metrics.age;
	}
	getBlockContent("#gender", "label");
	getBlockContent("label", "div");
	calculateResult(metrics.gender, metrics.intensity);
}

startupCondition();
calculateResult();
clearElems.addEventListener("click", function () {
	let answer = confirm("Are you sure you want to clear your results?");
	if (answer) {
		localStorage.removeItem("calculator");
		metrics = {};
		weight.value = "";
		height.value = "";
		age.value = "";
		startupCondition();
	}
});
