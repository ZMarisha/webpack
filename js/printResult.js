const divEl = document.querySelector('.textError');

export const printError = (textError) => {
    divEl.textContent = textError;
    
};

export const printResult = (({years, months, days}) => {
    divEl.textContent = `Год: ${years}, Месяц:  ${months}, День: ${days}`;
});