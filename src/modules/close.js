'use strict';

const closeMenu = () => {
    const popup = document.querySelectorAll('.popup');
    const overlay = document.querySelectorAll('.overlay');
    overlay.forEach(element => {
        element.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    });
};
export default closeMenu;