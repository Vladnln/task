const result = document.querySelector('.calculating__result');
let gender, height, weight, age, ratio;
function calcTotal() {
    if (!gender || !height || !weight || !age || !ratio) {
        result.textContent = '__';
        return;
    }
    if (gender === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}
calcTotal();
function getStaticInformation(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
            } else {
                gender = e.target.getAttribute('id');
            }
            console.log(ratio, gender)
        })
    })

}
getStaticInformation('#gender', 'calculating__choose-item_active');
getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
    console.log(ratio, gender)
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
        calcTotal();
    })
}
getInputInformation('#height');
getInputInformation('#weight');
getInputInformation('#age');