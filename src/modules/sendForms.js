'use strict';
const sendForm = () => {
    const successMsg = document.getElementById('thanks'),
        loadMessage = 'Загрузка...',
        forms = document.querySelectorAll('form'),
        statusMessage = document.createElement('div');

    //Добавляем класс для последующего удаления
    statusMessage.classList.add('toDel');
    statusMessage.style.cssText = `font-size: 16px; color: #ffd11a; margin-top: 5px;`;

    //Подключаем к каждой форме
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let target = event.target;
            // Валидация на чекбокс
            let tChild = target.children;
            let persDat = target.querySelector('.personal-data');
            for (let i = 0; i < tChild.length; i++) {
                if (persDat) {
                    let check = target.querySelector('.personal-data input');
                    
                    if (check.checked === false) {
                        const errorDiv = document.createElement('div');
                        errorDiv.classList.add('validator-error');
                        errorDiv.textContent = 'Необходимо согласиться на обработку данных';
                        persDat.insertAdjacentElement('beforeend', errorDiv);
                        setTimeout(() => errorDiv.remove(), 2000);
                        return;
                    }
                }
            }

            target.appendChild(statusMessage);
            statusMessage.innerHTML = loadMessage;

            let inputText = target.querySelectorAll('input'),
                priceTotal = target.querySelector('#price-total');

            const formData = new FormData();


            if (priceTotal) {
                formData.append(priceTotal.id, priceTotal.textContent);
            }

            inputText.forEach((item) => {
                if (item.type === "text" || item.type === "tel" || (item.type !== "checkbox" && item.checked)) {
                    formData.append(item.name, item.value);
                }
            });


            postData(formData)
                .then((response) => {
                    //Обработка ошибки для fetch
                    if (response.status !== 200) {
                        throw new Error('status network');
                    }
                    statusMessage.remove();
                    popupStatus();

                    //После отправки формы удаляются значения и стили
                    let delData = target.querySelectorAll('input');
                    delData.forEach((item) => {
                        item.value = '';
                        item.checked = '';
                        item.classList.remove('success');
                    });
                })
                .catch((error) => {
                    statusMessage.remove();
                    popupStatus();
                    let fault = successMsg.querySelector('.form-content');
                    fault.innerHTML = `<p>Во время отправки формы возникала ошибка.</p>
                <button class="btn close-btn">OK</button>`;
                });
        });

        // Валидация
        form.addEventListener('input', event => {
            const target = event.target;
            if (target.name === 'phone') {
                target.value = target.value.replace(/[^\\+\d]/g, '');
            }
            if(target.name === 'discount') {
                target.value = target.value.replace(/[^а-я0-9]/i, '');
            }
            if (target.name === 'name') {
                target.value = target.value.replace(/[^а-я]/i, '');
            }
            
        });
    });


    const popupStatus = () => {
        successMsg.style.display = 'block';
        successMsg.querySelector('.form-content').innerHTML = `<h4>Спасибо!</h4><p>Ваша заявка отправлена.<br>
        Мы свяжемся с вами в ближайшее время.</p><button class="btn close-btn">OK</button>`;
        successMsg.addEventListener('click', (e) => {
            let target = e.target;
            if (!target.closest('.form-content') || target.classList.contains('close-btn')) {
                successMsg.style.display = 'none';
            }
        });
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 3000);
    };

    let applyStyle = () => {
        const style = document.createElement('style');
        style.textContent = `
        .validator-error {
            margin-top: 15px;
            font-size: 18px;
            font-family:sans-serif;
            color: red;
        }
        `;
        document.head.appendChild(style);
    };
    applyStyle();

    const postData = (formData) => {
        //Перерабатываем с fetch
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });
    };
};

export default sendForm;