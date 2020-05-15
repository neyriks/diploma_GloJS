'use strict';

const openBurger = () => {
    const btnBurger = document.querySelector('.top-menu img'),
        popupMenu = document.querySelector('.popup-menu'),
        closeMenuBtn = document.querySelector('.close-menu-btn img'),
        scroll = document.querySelectorAll('.scroll');

    btnBurger.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    });
    closeMenuBtn.addEventListener('click', () => {
        popupMenu.style.display = 'none';
    });
    scroll.forEach(element => {
        element.addEventListener('click', () => {
            popupMenu.style.display = 'none';
        });
    });

};
export default openBurger;