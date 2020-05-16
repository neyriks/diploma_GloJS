'use strict';

const smooth = () => {
    const anchors = document.querySelectorAll('li>a[href^="#"]'),
    btnScrollUp = document.querySelector('#totop'),
    links = [...anchors, btnScrollUp];

for (const anchor of links) {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
};

export default smooth;