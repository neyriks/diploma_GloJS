'use strict';

const arrow = () => {
    const arrow = document.querySelector('#totop')  ;
    document.addEventListener('scroll', () => {
        let top = window.scrollY;
        if(top <= 500) {
            arrow.style.display = 'none';
        } else {
            arrow.style.display = 'block';
        }
    });
    arrow.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.header-main').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
};
export default arrow;