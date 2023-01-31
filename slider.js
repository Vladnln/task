let position = 0;
const slidesToShow = 2;
const slidesToScroll = 1;
const sliderBlock = document.querySelector(".slider");
const container = sliderBlock.querySelector(".slider__container");
const track = sliderBlock.querySelector(".slider__content");
const btnLeft = sliderBlock.querySelector(".button__left");
const btnRight = sliderBlock.querySelector(".button__right");
const img = sliderBlock.querySelectorAll(".slider__img");
const imgCount = img.length;
const imgWidth = img[1].offsetWidth + 34;
const movePosition = slidesToScroll * imgWidth;

const onClickBtnRight = () =>  {
    const imgLeft = imgCount - (Math.abs(position) + slidesToShow * imgWidth) / imgWidth;
    position -= imgLeft >= slidesToScroll ? movePosition : imgLeft * imgWidth;
    setPosition();
    checkBtns();
};
const onClickLeftRight = () => {
    const imgLeft = Math.abs(position)/ imgWidth;
    position += imgLeft >= slidesToScroll ? movePosition : imgLeft * imgWidth;

    setPosition();
    checkBtns();
    
};
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
    btnLeft.disabled = position === 0;
    btnRight.disabled = position <= -(imgCount - slidesToShow) * imgWidth;

};

const adaptslider = () => {
    document.querySelector('body').offsetWidth;
    
    const widthWind = imgCount - (Math.abs(position) + slidesToShow * imgWidth) / imgWidth;
}




checkBtns();
btnRight.addEventListener("click", onClickBtnRight);
btnLeft.addEventListener("click", onClickLeftRight);
