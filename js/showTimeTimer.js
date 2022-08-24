const minutesEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.second');

export default function showTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let minutesCondition = `${minutes < 10 ? "0" + minutes : minutes}`;
    let second = seconds % 60;
    let secondCondition = `${second < 10 ? "0" + second : second}`;

    minutesEl.innerHTML = minutesCondition;
    secondEl.innerHTML = secondCondition;
}



