let metrics = {}
let formData = document.querySelectorAll('.calculating__choose-item');
let activeItem = document.querySelectorAll('.calculating__choose-item_active');
const saved = localStorage.getItem('calculator')
if(saved){
    metrics = JSON.parse(saved)
}
activeItem.forEach(function (elem) {
    if (elem.parentNode.id === 'gender') {
        metrics.gender = elem.id;
    } else {
        metrics.intensity = +elem.dataset.ratio;
    };
});

function getBlockContent(parentSelector, element, action) {

    function checkingActiveElement(elem) {
        elem.parentNode.querySelectorAll(`${element}`).forEach(function (e) {
            e.classList.remove(`${action}`);
        });
        elem.classList.add(`${action}`);
        if (elem.parentNode.id === 'gender') {
            metrics.gender = elem.id;
        } else {
            metrics.intensity = +elem.dataset.ratio;
        }
    }
    const elements = document.querySelectorAll(`${parentSelector} ${element}`);
    elements.forEach(function (elem) {

        if (elem.classList.contains('gender')) {
            checkingActiveElement(document.querySelector(`#${metrics.gender}`));
        };
        if (elem.classList.contains('intensity')) {
            checkingActiveElement(document.querySelector(`[data-ratio="${metrics.intensity}"]`));
        };

        elem.addEventListener('click', function () {
            checkingActiveElement(this);
            calculateResult(metrics.gender, metrics.intensity);
        });
    });

};

function calculateResult(gender, intensity) {
    formData.forEach((input) => {
        input.addEventListener('change', function () {
            if (input.id === 'weight') {
                metrics.weight = +input.value;
            }
            if (input.id === 'height') {
                metrics.height = +input.value;
            }
            if (input.id === 'age') {
                metrics.age = +input.value;
            };
            calculateResult(metrics.gender, metrics.intensity)
        });
    });
    localStorage.setItem('calculator', JSON.stringify(metrics))
    if (!metrics.weight || !metrics.height || !metrics.age) {
        result = '____';
        document.querySelector("#clear").innerHTML = '&#10060;';
    } else {
        if (gender === 'female') {
            result = Math.floor(447.6 + (9.2 * metrics.weight) + (3.1 * metrics.height) - (4.3 * metrics.age) * intensity);
        } else {
            result = Math.floor(88.36 + (13.4 * metrics.weight) + (4.8 * metrics.height) - (5.7 * metrics.age) * intensity);
        }
        document.querySelector("#clear").innerHTML = '&#10060;';
    }
    if (!result) {
        result = '____';
        document.querySelector("#clear").innerHTML = '&#10060;';
    }
    document.querySelector('.calculating__result span').textContent = result;
};

function startupCondition() {
    if (metrics.weight) {
        document.querySelector('#weight').value = metrics.weight;
    }
    if (metrics.height) {
        document.querySelector('#height').value = metrics.height;
    }
    if (metrics.age) {
        document.querySelector('#age').value = metrics.age;
    }
    getBlockContent('#gender', 'div', 'calculating__choose-item_active');
    getBlockContent('.calculating__choose_big', 'div', 'calculating__choose-item_active');
    calculateResult(metrics.gender, metrics.intensity);
};

document.addEventListener('DOMContentLoaded', () => {
    startupCondition();
});

document.querySelector("#clear").addEventListener('click', function () {
    let answer = confirm('Are you sure you want to clear your results?');
    if (answer) {
        localStorage.removeItem('calculator')
        metrics ={}
        document.querySelector('#weight').value = ''
        document.querySelector('#height').value = '';
        document.querySelector('#age').value = '';
        startupCondition();
    };

});

formData.forEach(elem => {
    elem.addEventListener('change', function () {
        calculateResult(gender, intensity);
    });
});