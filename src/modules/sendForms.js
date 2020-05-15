'use strict';

const sendForms = () => {
    const errorMsg = 'Что-то пошло не так',
        successMsg = document.querySelector('#thanks'),
        loadingMsg = 'Загрузка...',
        forms = document.querySelectorAll('form'),
        statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const removeStatusMessage = () => {
        if (!statusMessage) {
            return;
        } else {
            setTimeout(() => {
                statusMessage.remove();
            }, 5000);
        }
    };
    const success = () => {
        statusMessage.insertAdjacentHTML( `beforeend`, successMsg);
        removeStatusMessage();
    };
    const error = () => {
        statusMessage.textContent = errorMsg;
        statusMessage.style.cssText = `font-size: 2rem;
        color: red; `;
        removeStatusMessage();
    };
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.insertAdjacentHTML(`beforeend`, loadingMsg);
            const formData = new FormData(form);
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body).then(success, response => {
                if (response.status !== 200) {
                    throw new Error('Status network not 200');
                }
            }).catch(error);
            form.reset();
        });
        // Валидация формы.
        form.addEventListener('input', event => {
            const target = event.target;
            if (target.name === 'phone') {
                target.value = target.value.replace(/[^\\+\d]/g, '');
            }
            if (target.name === 'name') {
                target.value = target.value.replace(/[^а-я ]/gi, '');
            }
        });
    });
};
 
export default sendForms;