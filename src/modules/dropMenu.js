'use strict';

const dropMenu = () => {
    let btnMenu = document.querySelector('.club-select'),
        menu = document.querySelector('.clubs-list ul');
    btnMenu.addEventListener('click', () => {
        let menuUl = document.querySelector('.clubs-list ul');
        if(menuUl === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
};
export default dropMenu;