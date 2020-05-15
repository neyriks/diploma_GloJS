'use strict';

const sliderMain = () => {
    const slides = document.querySelectorAll('.main-slider .slide');
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
        setInterval(autoPlaySlide, 4000);
    };
    startSlide();
    
};
export default sliderMain;