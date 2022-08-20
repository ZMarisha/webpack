import {} from './js/.luxon';

const formEl = document.querySelector('#form');
const divEl = document.querySelector('.textError');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target);

    const dateFrom = DateTime.fromSO('years', 'months', 'days');
    const dateTo = DateTime.fromSO('years', 'months', 'days');

    console.log(dateFrom, dateTo)

    if (!dateFrom || !dateTo) {
        divEl.textContent = 'Вы не выбрали дату!'
    }
})