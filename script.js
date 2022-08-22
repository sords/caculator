function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function percentage(a,b) {
    return 
}

function operate(a,operator,b){
    if(operator === '+'){
        return add(a,b)
    }
    if(operator === '-'){
        return subtract(a,b);
    }
    if(operator === '*'){
       return multiply(a,b);
    }
    if(operator === '/'){
       return division(a,b)
    }
}