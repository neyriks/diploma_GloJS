'use strict';
const freeVisitForm = () => {
    const btnPopUp = document.querySelector('.open-popup'),
        freeVisitForm = document.getElementById('free_visit_form'),
        closeFreeV = document.querySelector('#free_visit_form .close_icon'),
        closeFreeVOverlay = document.querySelector('#free_visit_form .overlay');


    btnPopUp.addEventListener('click', () => {
        freeVisitForm.style.display = 'block';
        freeVisitForm.style.opacity = 0;
        function animate({ duration, draw, timing }) {
            const start = performance.now();
            requestAnimationFrame(function animate(time) {
                let timeFraction = (time - start) / duration;
                if (timeFraction > 1) {
                    timeFraction = 1;
                }
                const progress = timing(timeFraction);
                draw(progress);
                if (timeFraction < 1) {
                    requestAnimationFrame(animate);
                }
            });
        }
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                freeVisitForm.style.opacity = progress * 1;
            },
        });
    });
    closeFreeV.addEventListener('click', () => {
        freeVisitForm.style.display = 'none';
    });
    closeFreeVOverlay.addEventListener('click', () => {
        freeVisitForm.style.display = 'none';
    });
};

export default freeVisitForm;