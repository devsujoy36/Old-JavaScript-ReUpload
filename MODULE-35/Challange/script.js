const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const displayOutput = document.getElementById('display-output');







function start() {
    let num = 0;
    const interValid = setInterval(() => {
        console.log(++num);
        displayOutput.innerText = num;
        stop(interValid,num)
    }, 400);

}

function stop(interValid,num) {
    if (num === 10) {
        clearInterval(interValid);
    }
    
}

stopBtn.addEventListener('click', stop(interValid,num))