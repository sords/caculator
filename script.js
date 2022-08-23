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

function percentage(a, b) {
    return (a / b) * 100
}

function operate(a, operator, b) {
    if (operator === '+') {
        return add(a, b)
    }
    if (operator === '-') {
        return subtract(a, b);
    }
    if (operator === '*') {
        return multiply(a, b);
    }
    if (operator === '/') {
        return division(a, b)
    }
    if (operator === '%') {
        return percentage(a, b)
    }

}

let diplaylast = document.getElementById('lastenter')
let displaynow = document.getElementById('nowenter')
let enternum = ''
let enterbefore = enternum;
let symbol = ''
let reepeat = 1;
let cap = 0;


function getondisplay(num, symbol = '') {
    if (symbol !== '')
        diplaylast.textContent = num + ' ' + symbol;
    displaynow.textContent = num;
    //enternum = num+''

}
function numberentered(value) {
    if (cap > 10) {
        return
    }
    if (enternum === '0') {
        enternum = ''
    }
    cap++
    enternum += value
    getondisplay(enternum, '')
}

function symbolenter(value) {
    if (enternum === '') {
        return
    }
    enterbefore = enternum;
    symbol = value
    diplaylast.textContent = enterbefore + symbol
    reepeat--;
}
let ran;
let rose;

function equalto() {
    let dec;
    reepeat++

    if (reepeat > 1) {
        return
    } else {
        ran = Number(enternum);
        rose = Number(enterbefore);
    }

    let man = operate(rose, symbol, ran);
    dec = enternum + ' ='
    diplaylast.textContent += dec;
    dec = enternum
    enternum = man + '';
    getondisplay(man)
}

function backclear() {
    let gaw = enternum;
    let gas = Math.floor(Number(gaw) / 10);
    enternum = gas + '';
    cap--;
    getondisplay(enternum);
}

function allclear(num) {
    enternum = ''
    cap = 0;
    diplaylast.textContent = num

    getondisplay(num)
}


//check every line and use of code