'use strict';

const dropMenu = () => {
    let btnMenu = document.querySelector('.club-select'),
    menu = document.querySelector('.club-select .clubs-list ul');
    btnMenu.addEventListener('click', () => {
        let menuUl = document.querySelector('.club-select .clubs-list ul').style.display;
        if(menuUl === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
};
export default dropMenu;