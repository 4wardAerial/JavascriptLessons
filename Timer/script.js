const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const timer = document.querySelector('.timer');

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
stop.addEventListener('dblclick', resetTimer);

let ms = 0;
let seg = 0;
let min = 0;
let clock;

function startTimer() {
    clock = setInterval(() => {
        timer.innerText = `${min}:${seg}:${ms}`;
        ms++;

        if (ms === 100) {
            seg++;
            ms = 0;
        }
        if (seg === 60) {
            min++;
            seg = 0;
        }
    }, 10);
    start.setAttribute('disabled', '');
}

function stopTimer() {
    clearInterval(clock);
    start.removeAttribute('disabled')
}

function resetTimer() {
    timer.innerText = "0:0:0";
    counter = 0;
}