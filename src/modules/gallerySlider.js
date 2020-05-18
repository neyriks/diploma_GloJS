'use strict';
const galleryCarousel = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
  slides = gallerySlider.querySelectorAll('.slide'),
  btn = document.querySelectorAll('#gallery button'),
  dots = document.querySelectorAll('.dot');

  
  slides.forEach( (slide, index) => {
      if (index === 0) {
          slide.style.display = 'block';
      } else if (index !== 0) {
         slide.style.display = 'none';
      }
  });

  const prevSlide = (elem, index) => {
      elem[index].style.display = 'none';
  };

  const nextSlide = (elem, index) => {
      elem[index].style.display = 'block';
  };
  const prevDot = (elem, index,strClass) => {
    elem[index].classList.remove(strClass);
};

const nextDot = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
};

  let currentSlide = 0;

  gallerySlider.addEventListener('click', (event) => {
      let target = event.target;
      event.preventDefault();
      if(!target.matches('.slider-arrow, .dot')){
          return;
      }

      prevSlide(slides,currentSlide);
      prevDot(dots, currentSlide, 'dot_active');
      if (target.matches('#arrow_right')){
          currentSlide++;
      } if (target.matches('#arrow_left')){
          currentSlide--;
      } else if (target.matches('.dot')){
          dots.forEach((elem, index) => {
              if ( elem === target){
                  currentSlide = index;
              }
          });
      }
      if (currentSlide >= slides.length){
          currentSlide = 0;
      } if (currentSlide < 0){
          currentSlide = slides.length -1 ;
      } 
      nextSlide(slides,currentSlide);
      nextDot(dots, currentSlide, 'dot_active');
  });
};

export default galleryCarousel;