import '../style/style.css';
import alarm from '!file-loader!../alarm/zvuk.mp3'
import getDateDiff from './getDateDiff.js';
import { printError, printResult } from './printResult.js';
import showTime from './showTimeTimer.js';
import { Howl } from 'howler';
import xor from 'lodash/xor';

console.log(xor([1, 2], [2, 6]));




// Date calculater

const formEl = document.querySelector('#form');


formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const formDate = new FormData(event.target);
    const firstDate1 = formDate.get('firstDate');
    const secondDate2= formDate.get('secondDate');

    if (!firstDate1 || !secondDate2) {
        printError("Для расчета промежутка необходимо заполнить оба поля!");
    } else {
        const dateDiff = getDateDiff(firstDate1, secondDate2);
        printResult(dateDiff);
    }
});


//timer 

const timeEl = document.querySelectorAll('.time');

//btn
const btnStop = document.querySelector('.btnStop');
const btnReset = document.querySelector('.btnReset');
const buttonsEl = document.querySelectorAll('[data-time]');

let countDown;

//Alarm
const howlerEl = document.querySelector('.btnAlarm');
var sound = new Howl({
    src: alarm,
  });

howlerEl.addEventListener('click', () => {
    sound.stop();
});


function getTime(seconds) {
    clearInterval(countDown);
    let timeNow = Date.now();
    let timeThen = timeNow + seconds * 1000;
    showTime(seconds);

    countDown = setInterval(() => {
        let timeDiff = Math.round((timeThen - Date.now()) / 1000);
        if (timeDiff < 0) {
            clearInterval(countDown); 
            sound.play();
            return
        }

        showTime(timeDiff);
    }, 1000);
}  

function startTimer() {
    const secondTime = parseInt(this.dataset.time);
    getTime(secondTime);
}

buttonsEl.forEach(button => button.addEventListener('click', startTimer));

btnStop.addEventListener('click', () => {
    clearInterval(countDown);

});

btnReset.addEventListener('click', () => {
    timeEl.forEach(item => item.textContent = '00');
    clearInterval(countDown);
    countDown = 0; 
});


//input
const formElem = document.querySelector('#formEnter');
const inputEl = document.querySelector('.entering');

formElem.addEventListener('submit', (event) => {
     event.preventDefault();
     const values = inputEl.value;
     getTime(values * 60);
     event.target.reset();
 });