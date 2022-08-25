function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return (a * b).toFixed(3);
}

function division(a, b) {
    return (a / b).toFixed(3);
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
let point = 0;
let magic = 0;
function getondisplay(num, symbol = '') {
    if (symbol !== '')
        diplaylast.textContent = num + ' ' + symbol;
    displaynow.textContent = num;
    //enternum = num+''

}
function numberentered(value) {
    if (magic === 1) {
        magic--
    }
    if (cap > 10) {
        return
    }
    if (enternum === '0') {
        enternum = ''
    }
    if (value === '.') {
        if (point > 1) {
            return
        }
        //point was incrementing
        point++
    }
    // let krr = Array.from(enternum)
    // if()
    cap++
    enternum += value
    console.log(enternum, 2)
    getondisplay(enternum, '')
}

function change() {
//     let plus = '+'
//     let minus = '-'
//     if (enternum === '') {
//         return
//     }
//     let att = Array.from(enternum)
//     if (att[0] === '-') {
//         enternum = att.slice(1,).join(',')
//         enternum = plus + enternum
//         getondisplay(enternum)
//     } else {
//         enternum = minus + enternum
//         getondisplay(enternum)
//     } let kat = Number(enternum)
    if(Number(enternum) > 0) {
       
        enternum = -1*(Number(enternum))
        enternum += '' //+enternum
        getondisplay(enternum)
        return
    }
    if(Number(enternum) < 0){

        enternum = -1*(Number(enternum))
        enternum = '+' + enternum
        getondisplay(enternum)
        return
    }


}


function symbolenter(value='-') {

    if (enternum === '') {
        if (magic > 0) {
            let book = (enterbefore)
            console.log(book)
            diplaylast.textContent = book + value
        }
        return

    }
    enterbefore = enternum
    // let before = Array.from(diplaylast.textContent);
    // if(reepeat > 1){
    //     enterbefore = enternum
    // }
    // if(magic > 1){
    //     magic--;
    //     enterbefore = before.slice(0,-1).join(',')
    //     console.log(enterbefore,'inside')
    // }else{
    // enterbefore = displaynow.textContent + '';
    // console.log(enterbefore)
    // }
    symbol = value

    magic++;
    diplaylast.textContent = enterbefore + value
    point--;
    getondisplay(enternum)
    enternum = '';
    if (reepeat === 0) {
        return
    }
    reepeat--;
    
}
let ran;
let rose;


function equalto() {
    if (magic === 1) {
        magic--
    }
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
    dec = enternum + ' ='
    diplaylast.textContent += dec;
    dec = enternum
    enternum = man + '';
    getondisplay(man)
}

function backclear() {
    let gaw = enternum;
    // let poinnt = gaw.split('');
    let gas;
    let lgaw
    // if(poinnt.includes('.')){
    //     gas = Number(gaw)/10;
    // }else{  
    //     gas = Math.floor(Number(gaw) / 10);  
    // }

    // let lgaw = gas + '';
    // enternum = gas + '';
    cap--;
    // getondisplay(lgaw);
    // currentOperationScreen.textContent = currentOperationScreen.textContent
    // .toString()
    // .slice(0, -1)
    gas = gaw.toString().slice(0, -1)
    if (gas.includes('.')) {
        point++
    }
    point--
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
    enternum = ''
    cap = 0;
    diplaylast.textContent = num
    point--;

    getondisplay(num)
}


//check every line and use of code