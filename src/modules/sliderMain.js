'use strict';

const sliderMain = () => {
    const slider = document.querySelector('.main-slider'),
    slides = document.querySelectorAll('.main-slider .slide');
    console.log(slides);
    let currentSlide = 0;
    const autoPlaySlide = () => {

        slides[currentSlide].style.display = 'none';
        currentSlide++;

        if(currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].style.display = 'inline-block';

    };
    const startSlide = () => {
        setInterval(autoPlaySlide, 3500);
    };
    startSlide();
    
};
export default sliderMain;