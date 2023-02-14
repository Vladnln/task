const result = document.querySelector('.calculating__result');
let gender, height, weight, age, ratio;

function calculator() {
    if (!gender || !height || !weight || !age || !ratio){
        result.textContent='__';
        return;
    }
    if (gender === 'female'){
        result.textContent = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio;
    } else {
      result.textContent = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio;
    }
    console.log(ratio, gender)
    elements.forEach(elem => {
        elem.classList.remove(activeClass);
    })
    e.target.classList.add(activeClass);
}
function getStaticInformation(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);

    document.querySelector(parentSelector).addEventListener('click', (e) => {
        if (e.target.getAttribute('data-ratio')){
            ratio = +e.target.getAttribute('data-ratio');
        } else {
           gender = e.target.getAttribute('id');
        }
    })
}

function getInputInformation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
        switch (input.getAttribute('id')){
            case 'height':
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
            case age:
                age = +input.value;
                break;
        }
        calculator();
    })
}
getInputInformation('#height');
getInputInformation('#weight');
getInputInformation('#age');
getStaticInformation('#gender', 'calculating__choose-item_active');
getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
console.log(ratio, gender);
calculator();