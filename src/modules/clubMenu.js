'use strict';
const clubMenu = () => {
    let btnMenu = document.querySelector('.clubs-list'),
        menu = document.querySelector('.clubs-list ul');
    btnMenu.addEventListener('click', () => {
        let menuUl = document.querySelector('.clubs-list ul').style.display;
        if(menuUl === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
};
export default clubMenu;