const numPad = document.querySelector(".num_pad");
const screen = document.querySelector(".screen");


const equalButton = document.querySelector("#equal");
let input = "";
let ans;
let calculated = false;

// load the numbers buttons
window.onload = function () {
    for (let i = 1; i < 10; i++) {
        const eachNum = document.createElement("button");
        eachNum.textContent = i;
        eachNum.setAttribute("value", i);
        eachNum.setAttribute("class", "button");
        numPad.append(eachNum);
    }
    const zeroNum = document.createElement("button");
    zeroNum.textContent = 0;
    zeroNum.setAttribute("value", "0");
    zeroNum.setAttribute("class", "button");
    numPad.append(zeroNum);

    ButtonEvents();
}


function ButtonEvents () {
    // need it here so there is a "buttons"
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function(button) {
        button.addEventListener("click", () => {
            if (calculated === true) {
                eraseScreen();
                calculated = false;
            }
            if (button.value === "=") {
                calculate();
                eraseScreen();
                const answer = document.createElement("div");
                answer.textContent = ans;
                screen.append(answer);
                input = "";
                ans = 0;
                calculated = true;
            } else {
                input += button.value;
                console.log(button.value);
        
                const eachClick = document.createElement("div");
                eachClick.textContent = button.value;
                screen.append(eachClick);
            }
            if (button.value === "del") {
                screen.removeChild(screen.lastChild);
                screen.removeChild(screen.lastChild);
                input = input.slice(0, -1);
            }
            
        })
    });
}

function eraseScreen() {
    while(screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
}


function calculate() {
    console.log(input);
    let beforeNum = input.split(/\D/);
    let operator = input.match(/\D/g);
    let firstNum = +beforeNum[0];
    let secondNum = +beforeNum[1];
    console.log(beforeNum);
    console.log(firstNum);
    console.log(secondNum);
    console.log(operator);
    switch (operator[0]) {
        case "+":
            ans = firstNum + secondNum;
            break;
        case "-":
            ans = firstNum - secondNum;
            break;
        case "x":
            ans = firstNum * secondNum;
            break;
        case "/":
            if (firstNum === 0 || secondNum === 0) {
                ans = 0;
                break;
            }
            ans = firstNum / secondNum;
            break;
    }
}


