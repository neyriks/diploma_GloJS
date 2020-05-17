'use strict';
const galleryCarousel = () => {
    const slide = document.querySelectorAll('.gallery-slider .slide'),
     btn = document.querySelectorAll('#gallery button'),
     dot = document.querySelectorAll('.dot'),
     slider = document.querySelector('.gallery-slider');
    
    let currentSlide = 0;
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if(!target.matches('#gallery button, dot')) {
            return;
        }
        prevSlide(slide, currentSlide, 'slide_active');
        prevSlide(dot, currentSlide, 'dot_active');
        if(target.matches('#arrow_right')){
            currentSlide++;
        } else if(target.matches('#arrow_left')) {
            currentSlide--;
        } else if(target.matches('.dot')) {
            dot.forEach((element, index) => {
                if (element === target) {
                    currentSlide = index;
                }
            });
        }
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if(currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'slide_active');
        nextSlide(dot, currentSlide, 'dot_active');
    });
};

export default galleryCarousel;