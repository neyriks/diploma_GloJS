'use strict';
class SliderCarousel {
    constructor({
      main,
      wrap,
      next,
      prev,
      infinity = false,
      position = 0,
      slidesToShow = 5,
      responsive = []
    }) {
      if (!(main || wrap)) {
        console.warn(`slider-carousel: Необходимо 2 свойства, "main" и "wrap"`);
      }
      this.main = document.querySelector('#services .wrapper');
      this.wrap = document.querySelector('.services-slider');
      this.slides = document.querySelector('.services-slider').children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        slideWidth: Math.floor(100 / this.slidesToShow),
        infinity,
        maxPosition: this.slides.length - this.slidesToShow
      };
      this.responsive = responsive;
    }
    
    init() { // инициализация слайдера-карусели
      this.addLexClass();
      this.addStyle();
  
      if (this.prev && this.next) { // проверка на существование кнопок
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      }
      if (this.responsive) {
        this.responseInit();
      }
    }
    addLexClass() { // навешивание классов на элементы слайдера
      this.main.classList.add('lex-slider');
      this.wrap.classList.add('lex-slider__wrap');
  
      for (const item of this.slides) {
        item.classList.add('lex-slider__item');
      }
    }
  
    addStyle() { // навешивание стилей к слайдеру 
      let style = document.getElementById('sliderCarousel-style');
      if (!style) {
        style = document.createElement('style');
        style.id = 'sliderCarousel-style';
      }
      style.textContent = `
        .lex-slider {
          overflow: hidden !important;
        }
        .lex-slider__wrap {
          display: flex !important;
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
        .lex-slider__item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 ${this.options.slideWidth}% !important;
          margin: auto 0 !important;
        }
        `;
      document.head.appendChild(style);
    }
  
    controlSlider() {
      this.prev.addEventListener('click', this.prevSlide.bind(this));
      this.next.addEventListener('click', this.nextSlide.bind(this));
    }
  
    prevSlide() { // предыдущий слайд
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
      }
  
    }
  
    nextSlide() { // следующий слайд
      if (this.options.infinity || this.options.position < this.options.maxPosition) {
        ++this.options.position;
        if (this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
      }
    }
  
    addArrow() { // создание стрелок
      this.prev = document.createElement('button');
      this.next = document.createElement('button');
  
      this.prev.className = 'lex-slider__prev';
      this.next.className = 'lex-slider__next';
  
      this.main.appendChild(this.prev);
      this.main.appendChild(this.next);
  
      const style = document.createElement('style');
  
      style.textContent = `
        .lex-slider__prev,
        .lex-slider__next {
          margin: 0 10px;
          border: 20px solid transparent;
          background: transparent;
          cursor: pointer;
        }
        .lex-slider__next {
          border-left-color: #19b5fe;
        }
        .lex-slider__prev {
          border-right-color: #19b5fe;
        }
        .lex-slider__prev:hover,
        .lex-slider__next:hover,
        .lex-slider__prev:focus,
        .lex-slider__next:focus {
          background: transparent;
          outline: none;
        }
        `;
      document.head.appendChild(style);
    }
  
    responseInit() {
      const slidesToShowDefault = this.slidesToShow,
        allResponse = this.responsive.map(item => item.breakpoint),
        maxResponse = Math.max(...allResponse);
  
      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slidesToShow;
              this.options.slideWidth = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.slideWidth = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        }
      };
      checkResponse();
  
      window.addEventListener('resize', checkResponse);
    }
  }
  
  export default SliderCarousel;