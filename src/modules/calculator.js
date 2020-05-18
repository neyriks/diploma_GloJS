'use strict';

const calculator = () => {
    let time = document.querySelectorAll('.time input');
    let price = document.getElementById('price-total');
    console.log(time);
    for(let i = 0; i < time.length; i++) {
        let result = time.value * 2999;
        price.innerHTML = result;
    }
   
};

export default calculator;