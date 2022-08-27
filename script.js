let diplaylast = document.getElementById('lastenter');
let displaynow = document.getElementById('nowenter');
let enternum = '';
let enterbefore = enternum;
let symbol = ''
// for not repeating twice of equal to symbol
let reepeat = 1;
let pointchecker = 0;
//for changing the symbols of addition and substraction and etc
let magic = 0;


function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return (a * b);
}
function division(a, b) {
    return (a / b);
}
function percentage(a, b) {
    return (a / b) * 100
}
function squart(a, b) {
    return (a ** b)
}

function operate(a, operator, b) {
    if (operator === '+') {
        return add(a, b)
    }
    if (operator === '-') {
        return subtract(a, b);
    }
    if (operator === '*') {
        if (pointchecker >= 1) {
            return multiply(a, b).toFixed(3);
        }
        return multiply(a, b);
    }
    if (operator === '/') {
        if (pointchecker >= 1) {
            return division(a, b).toFixed(3);
        }
        return division(a, b)
    }
    if (operator === '%') {
        return percentage(a, b)
    }
    if (operator === '^') {
        return squart(a, b)
    }
}

function getondisplay(num, symbol1 = '', fromequal = '') {
    if (symbol1 !== '')
        diplaylast.textContent = num + ' ' + symbol1;
    if (enternum.includes('.') && fromequal === 'fromequal')
        pointchecker++;
    displaynow.textContent = num;
}

function numberentered(value) {
    if (magic === 1)
        magic--;
    if (enternum === '0') 
        enternum = '';
    if (value === '.') {
        if (pointchecker >= 1)
            return;
        if (enternum === '')
            enternum = '0' + enternum;
        pointchecker++;
    }
    enternum += value;
    getondisplay(enternum, '')
}

function symbolenter(value = '-') {
    if (enternum === '') {
        if (magic > 0)
            diplaylast.textContent = enterbefore + value;
        return;
    }
    enterbefore = enternum;
    if (enternum.includes('.')) {
        if (pointchecker >= 1)
            enterbefore = enternum + '0';
    }
    symbol = value;
    magic++;
    diplaylast.textContent = enterbefore + value;
    if (pointchecker >= 1)
        pointchecker--;
    getondisplay(enternum)
    enternum = '';
    if (reepeat === 0)
        return;
    reepeat--;
}

function equalto() {
    if (magic === 1)
        magic--;
    reepeat++
    if (enternum === '' || reepeat > 1) {
        reepeat--
        return;
    }
    enternum = Number(enternum);
    enterbefore = Number(enterbefore);
    let result = operate(enterbefore, symbol, enternum);
    if (pointchecker >= 1) {
        enternum = enternum + '0' 
        pointchecker--;
    }
    enterbefore = enternum + ' =';
    diplaylast.textContent += enterbefore;
    enterbefore = enternum
    enternum = result + '';
    getondisplay(result, '', 'fromequal')
}

function backclear() {
    enternum = enternum.toString().slice(0, -1)
    if (enternum.includes('.')) 
        pointchecker++;
    if (pointchecker >= 1) 
        pointchecker--;
    if (enternum === '') 
        enternum = '0';
    else 
        enternum = enternum + '';
    getondisplay(enternum)
}

function allclear(num) {
    enternum = '';
    diplaylast.textContent = num
    pointchecker--;
    getondisplay(num)
}