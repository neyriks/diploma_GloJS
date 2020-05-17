'use strict';
const bannerForm = () => {
    const check = document.querySelectorAll('input[type="checkbox"]');
    const btnSend = document.querySelector('button[type="submit"]');
    btnSend.style.opacity = '0.5';
    check.forEach(element => {
        element.addEventListener('change', (event) => {
            if(element) {
                if (event.target.checked) {
                btnSend.disabled = false;
                btnSend.style.opacity = '1';
              } else {
                btnSend.disabled = true;
                btnSend.style.opacity = '0.5';
              }
            } else {
                return;
            }
        });
    });
};
export default bannerForm;