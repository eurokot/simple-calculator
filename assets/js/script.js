const log = console.log;
const calcInput = document.querySelector('#calc-input');
const btn = document.querySelectorAll('.btn');

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

const handler = (e) => {
    let find = e.target.dataset;
    return "num" in find ? num(parseInt(find.num)) : 
            "sign" in find ? sign(find.sign) :
            "clear" in find ? clearInput() :
            "equals" in find ? calcResult() :
            "Nothing found";
}


btn.forEach((button) => {
    button.addEventListener('click', handler);
});