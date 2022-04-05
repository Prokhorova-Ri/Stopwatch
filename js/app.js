const secondCell = document.querySelector('#second');
const minuteCell = document.querySelector('#minute');
const hourCell = document.querySelector('#hour');

const btnStart = document.querySelector('#btnStart');
const btnPause = document.querySelector('#btnPause');
const btnReset = document.querySelector('#btnReset');

let timerID
let hour = 00,
    minute = 00,
    second = 00;


btnStart.onclick = function () {
    timerID = setInterval(function() {
    second++;
    console.log(second);
    secondCell.innerText = second;
    minuteCell.innerText = minute;
    hourCell.innerText = hour;
    if (second >= 60) {
      minute++
      second = 0;
    } else if (minute >= 60) {      
      hour++
      minute = 0;
    }
  }, 1000);
};

btnPause.onclick = function () {
  clearInterval(timerID);
};

btnReset.onclick = function () {
  secondCell.innerText = 0;
  minuteCell.innerText = 0;
  hourCell.innerText = 0;
  clearInterval(timerID);
    hour = 00;
    minute = 00;
    second = 00;
};