let diplaylast = document.getElementById('lastenter');
let displaynow = document.getElementById('nowenter');
let enternum = '';
let enterbefore = enternum;
let symbol = ''
let reepeat = 1;
let pointchecker = 0;
//let magic = 0;


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
function squart(a,b) {
    return (a**b)
}

function operate(a, operator, b) {
    if (operator === '+') {
        return add(a, b)
    }
    if (operator === '-') {
        return subtract(a, b);
    }
    if (operator === '*') {
        if(pointchecker >= 1){
            return multiply(a, b).toFixed(3);
        }
        return multiply(a, b);
    }
    if (operator === '/') {
        if(point >= 1){
            return division(a, b).toFixed(3);
        }
        return division(a, b)
    }
    if (operator === '%') {
        return percentage(a, b)
    }
    if (operator === '^') {
        return squart(a,b)
    }
}

function getondisplay(num,symbol = '',fromequal = '') {
    if (symbol !== '')
        diplaylast.textContent = num + ' ' + symbol;
     if(enternum.includes('.') && fromequal === 'fromequal')
       pointchecker++;
    displaynow.textContent = num;
}

function numberentered(value) {
    // if (magic === 1) 
    //     magic--;
    if (enternum === '0') {
        enternum = ''
    }
    if (value === '.') {
        if (pointchecker >= 1) {
            return
        }
        //point was incrementing
        if (enternum === '') {
            enternum = '0' + enternum
        }
        pointchecker++
    }
    enternum += value
    getondisplay(enternum, '')
}

function symbolenter(value = '-') {
    if (enternum === '') {
        // if (magic > 0) {
        //     let book = (enterbefore)
        //     diplaylast.textContent = book + value
        // }
        return
    }
    enterbefore = enternum
    if (enternum.includes('.')) {
        if (pointchecker >= 1) 
            enterbefore = enternum + '0';
    }
    symbol = value
    magic++;
    diplaylast.textContent = enterbefore + value
   if(pointchecker >= 1)
      pointchecker--;
    getondisplay(enternum)
    enternum = '';
    if (reepeat === 0) 
        return;
    reepeat--;
}
let ran;
let rose;


function equalto() {
    // if (magic === 1) 
    //     magic--;
    let dec;
    reepeat++
    if (enternum === '' || reepeat > 1) {
        reepeat--
        return
    } else {
        ran = Number(enternum);
        rose = Number(enterbefore);
    }
    let man = operate(rose, symbol, ran);
    if (pointchecker >= 1) {
        enternum = enternum + '0'
    }
    dec = enternum + ' ='
    diplaylast.textContent += dec;
    if (pointchecker >= 1) {
        pointchecker--;
    }
    dec = enternum
    enternum = man + '';
    getondisplay(man,'','fromequal')
}

function backclear() {
    let gaw = enternum;
    let gas;
    let lgaw
    gas = gaw.toString().slice(0, -1)
    if (gas.includes('.')) {
        pointchecker++
    } //else {
    if (pointchecker >= 1) {
        pointchecker--
    }

    //}
    console.log(gas, gas.includes('.'))
    if (gas === '') {
        enternum = '0'
        lgaw = '0'
    } else {
        enternum = gas + ''
        lgaw = gas + ''
    }
    getondisplay(lgaw)
}

function allclear(num) {
    enternum = '';
    diplaylast.textContent = num
    pointchecker--;
    getondisplay(num)
}