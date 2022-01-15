const log = console.log;
const calcInput = document.querySelector('#calc-input');
const calcForm = document.querySelector('#calc-form');

calcForm.addEventListener('submit', function(event) {
    event.preventDefault();
});

let calc = '';
let result = 0;

const num = num => {
    if(calcInput.value == '' && num == 0) {
        alert('Number does not start from zero');
        return;
    } else if(result != 0 && String(result) == calc){
        clearInput();
        calcInput.value += num;
    } else {
        calcInput.value += num;
    }
}

const sign = sign => {
    if(String(result) != calc) {
        calc += calcInput.value;
        calc += sign;
        calcInput.value = '';
    } else {
        calc += sign;
        result = 0;
        calcInput.value = '';
    }
}

const calcResult = () => {
    if(calcInput.value != '' && String(result) != calc){
        try {
            calc += calcInput.value;
            calcInput.value = eval(calc);   
            result = calcInput.value;
            calc = result;
        } catch (e) {
            alert('Please, enter the following number');
        }
    } else if(String(result) == calc){
        return;
    } else {
        alert(`You didn't enter a number`);
    }
}

const clearInput = () => {
    calcInput.value = '';
    calc = '';
    result = 0;
}