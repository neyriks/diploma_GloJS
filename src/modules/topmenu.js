'use strict';

const topMenu = () => {
    const menu = document.querySelector('.top-menu');
    window.addEventListener('scroll', () => {
        let top = window.scrollY;
        if(top > 400) {
            menu.style.position = 'fixed';
        } else {
            menu.style.position = 'relative';
        }
        
    });
};
export default topMenu;