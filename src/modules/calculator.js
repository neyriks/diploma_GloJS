'use strict';

const calculator = () => {
    let time = document.querySelectorAll('.time input'),
        price = document.getElementById('price-total');
    console.log(time);
    for(let i = 0; i < time.length; i++) {
        let end = Number.parseInt(time.value);
        let result = end * 2999;
        price.innerHTML = result;
        
    }
   
};

export default calculator;