'use strict';

const services = () => {
    const slider = document.querySelector('.services-slider');
    const slides = document.querySelectorAll('.services-slider .slide');
    let currentSlide = 0;
    const autoPlaySlide = () => {

        slides[currentSlide].style.display = 'none';
        currentSlide++;

        if (currentSlide >= 4) {
            currentSlide = 0;
        }

        slides[currentSlide].style.display = 'inline-block';
    };

};
export default services;