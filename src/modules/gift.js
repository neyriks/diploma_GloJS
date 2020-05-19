'use strict';
import closeMenu from './close';
const gift = () => {
    const giftBtn = document.querySelector('.fixed-gift'),
        gift = document.querySelector('#gift'),
        closeGift = document.querySelector('#gift .close-form');
    
    if(giftBtn) {
        giftBtn.addEventListener('click', () => {
        gift.style.display = 'block';
        gift.style.opacity = 0;

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
                gift.style.opacity = progress * 1;
            },
        });
        giftBtn.style.display = 'none';
    });
    // Закрываем Popup
    closeGift.addEventListener('click', () => {
        gift.style.display = 'none';
    });
    closeMenu();
} else {
    console.log('No gift on this page');
}};
export default gift;
