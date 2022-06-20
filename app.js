// difucul calculator

let input = document.getElementById('input'),
    number = document.querySelectorAll('.numbers div'),
    operator = document.querySelectorAll('.operators div'),
    result = document.getElementById('result'),
    clear = document.getElementById('clear'),
    resultDisplayed = false;


for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {

        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];

        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }

    });
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function (e) {

        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];

        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
        } else {
            input.innerHTML += e.target.innerHTML;
        }

    });
}

result.addEventListener("click", function () {

    let inputString = input.innerHTML;

    let numbers = inputString.split(/\+|\-|\×|\÷/g);

    let operators = inputString.replace(/[0-9]|\./g, "").split("");


    let divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    let multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    let subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    let add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    input.innerHTML = numbers[0];

    resultDisplayed = true;
});

clear.addEventListener("click", function () {
    input.innerHTML = "";
})

// simple calculator
let firstNumber = document.getElementById('demo')
let secendNumber = document.getElementById('secendDemo')
let submit = document.getElementById("submit")
let resultt = document.getElementById('resultat')
let atribut = document.getElementById('atribut')
let cleare = document.getElementById('cleare')

submit.addEventListener('click', function () {
    let paragraf = document.createElement('p')
    let first = parseInt(firstNumber.value)
    let secend = parseInt(secendNumber.value)
    if (atribut.value === '+') {
        paragraf.innerHTML = first + secend
        resultt.appendChild(paragraf)
    } else if (atribut.value === '-') {
        paragraf.innerHTML = first - secend
        resultt.appendChild(paragraf)
    } else if (atribut.value === '*') {
        paragraf.innerHTML = first * secend
        resultt.appendChild(paragraf)
    } else if (atribut.value === '/') {
        paragraf.innerHTML = first / secend
        resultt.appendChild(paragraf)
    }

})
// 1chi vazifa
Array.prototype.square = function () {
    let arr = [];
    this.map(function (obj) {
        arr.push(obj * obj);
    });
    return arr;
}
arr = [1 + 6 + 7 + 9];
console.log(`1,6,7,9 sonlarin kvadratin yegindisi ${arr.square()}`);
//1chi vazifa
let c = Math.floor(Math.random() * 100);
let v = Math.floor(Math.random() * 100);
console.log(c + " " + v)
if (c === v) {
    console.log("=")
} else if (c < v) {
    console.log("<")
} else if (c > v) {
    console.log(">")
}

//2chi vazifa
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);

console.log(a + ' ' + b)

if (a > b) {
    console.log(a + ' ' + b)
} else if (b > a) {
    console.log(b + ' ' + a)
}


//3chi vazifa
let max = Math.max(963, 487, 847)
let min = Math.min(963, 487, 847)

console.log(max - min)