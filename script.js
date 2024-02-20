const numPad = document.querySelector(".num_pad");
const screen = document.querySelector(".screen");


const equalButton = document.querySelector("#equal");
let input = "";

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
            if (button.value === "equal") {
                calculate();
            }
            input += button.value;
            console.log(button.value);
    
            const eachClick = document.createElement("div");
            eachClick.textContent = button.value;
            screen.append(eachClick);
        })
    });
}




function calculate() {
    console.log(input);
    let beforeNum = input.split(/\D/);
    let operator = input.split(/\D/g);
    let firstNum = beforeNum[0];
    let secondNum = beforeNum[1];
    let ans;
    console.log(beforeNum);
    console.log(firstNum);
    console.log(secondNum);
    console.log(operator);
    // console.log(numbers);
}


