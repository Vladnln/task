let position = 0;
const slidesToShow = 2;
const slidesToScroll = 1;
const container = document.querySelector(".slider__container");
const track = document.querySelector(".slider__content");
const btnLeft = document.querySelector(".button__left");
const btnRight = document.querySelector(".button__right");
const img = document.querySelectorAll(".slider__img");
const imgCount = img.length;
const imgWidth = img[1].offsetWidth + 34;
const movePosition = slidesToScroll * imgWidth;


console.log(imgWidth)
btnRight.addEventListener("click", () => {
    const imgLeft = imgCount - (Math.abs(position) + slidesToShow * imgWidth) / imgWidth;
    position -= imgLeft >= slidesToScroll ? movePosition : imgLeft * imgWidth;
    setPosition();
    checkBtns();
});
btnLeft.addEventListener("click", () => {
    const imgLeft = Math.abs(position)/ imgWidth;
    position += imgLeft >= slidesToScroll ? movePosition : imgLeft * imgWidth;

    setPosition();
    checkBtns();
    console.log(position);
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
    btnLeft.disabled = position === 0;
    btnRight.disabled = position <= -(imgCount - slidesToShow) * imgWidth;

};

checkBtns();
