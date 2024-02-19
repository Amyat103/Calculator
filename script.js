const numPad = document.querySelector(".num_pad");

const add_numpad = function () {
    for (let i = 1; i < 10; i++) {
        const eachNum = document.createElement("div");
        eachNum.textContent = i;
        numPad.append(eachNum);
    }
}

