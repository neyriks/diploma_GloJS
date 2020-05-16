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
};
export default arrow;