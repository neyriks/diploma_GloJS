'use strict';

const closeMenu = () => {
    const closeBtn = document.querySelector('.close_icon'),
        overlay = document.querySelector('.overlay'),
     popup = document.querySelector('.popup');
     popup.addEventListener('click', (el) => {
            if (el.target === closeBtn) {
                popup.style.display = 'none';
            }
            if (el.target === overlay) {
                popup.style.display = 'none';
            }
        });
};
export default closeMenu;