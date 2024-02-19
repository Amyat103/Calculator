const numPad = document.querySelector(".num_pad");
const screen = document.querySelector(".screen");

let input = "";

// load the numbers buttons
window.onload = function () {
    for (let i = 1; i < 10; i++) {
        const eachNum = document.createElement("button");
        eachNum.textContent = i;
        eachNum.setAttribute("value", i);
        eachNum.setAttribute("class", "button");
        numPad.append(eachNum);
        // eachNum.addEventListener("click" () {
        //     input += this.value;
        // })
    }
    const zeroNum = document.createElement("button");
    zeroNum.textContent = 0;
    zeroNum.setAttribute("value", "10");
    zeroNum.setAttribute("class", "button");
    numPad.append(zeroNum);
}


const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
    button.addEventListener("click", something)
});

function calculate() {

}


