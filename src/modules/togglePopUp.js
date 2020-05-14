'use strict';

const togglePopUp = () => {
    const btnPopUp = document.querySelector('.open-popup'),
        popup = document.getElementById('free_visit_form'),
        closePopUp = document.querySelector('#free_visit_form .close-form'),
        overlay = document.querySelector('#free_visit_form .overlay');
    btnPopUp.addEventListener('click', () => {
        popup.style.display = 'block';
        popup.style.opacity = 0;
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
                popup.style.opacity = progress * 1;
            },
        });
    });
    // Закрываем Popup
    closePopUp.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    // Закрываем через подложку.
    overlay.addEventListener('click', (e) => {
        if(e.target === overlay) {
            popup.style.display = 'none';
        }
    });
};

export default togglePopUp;