'use strict';
import closeMenu from './close';
const callback = () => {
    const callbackBtn = document.querySelector('.callback-btn'),
        callBackForm = document.querySelector('#callback_form');

    callbackBtn.addEventListener('click', () => {
        callBackForm.style.display = 'block';
        callBackForm.style.opacity = 0;

        function animate({
            duration,
            draw,
            timing
        }) {
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
                callBackForm.style.opacity = progress * 1;
            },
        });
    });
    closeMenu();
};

export default callback;