const numPad = document.querySelector(".num_pad");

window.onload = function () {
    for (let i = 1; i < 10; i++) {
        const eachNum = document.createElement("button");
        eachNum.textContent = i;
        numPad.append(eachNum);
    }
    const zeroNum = document.createElement("button");
    zeroNum.textContent = 0;
    numPad.append(zeroNum);
}

