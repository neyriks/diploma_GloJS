'use strict';

const callback = () => {
    const callbackBtn = document.querySelector('.callback-btn'),
    callBackForm = document.querySelector('#callback_form'),
    closeBtn = document.querySelector('.close-form'),
    overlay = document.querySelector('.overlay');
    callbackBtn.addEventListener('click', () => {
        callBackForm.style.display = 'block';
    });
    closeBtn.addEventListener('click', () => {
        callBackForm.style.display = 'none';
    });
    // Закрываем через подложку.
    overlay.addEventListener('click', (e) => {
        if(e.target === overlay) {
            callBackForm.style.display = 'none';
        }
    });
};

export default callback;