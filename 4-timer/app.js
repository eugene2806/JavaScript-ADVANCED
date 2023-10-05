'use strict';

function declensionNum(number, arrayWord) {
    if(number % 10 === 1 && number !== 11) {
        return arrayWord[0];
    }
    if (number > 10 && number < 20) {
        return arrayWord[2];
    }
    if(number % 10 >= 2 && number % 10 <= 4) {
        return arrayWord[1];
    }
    return arrayWord[2];
}

function timer(date) {
    const endDate = new Date(date);
    const timer = setInterval(() => {
        const timeToNY = endDate - Date.now();
        if(timeToNY > 0) {
        const month = Math.floor(timeToNY / 1000 / 60 / 60 / 24 / 30);
        const day = Math.floor(timeToNY / 1000 / 60 / 60 / 24) % 30;
        const hour = Math.floor(timeToNY / 1000 / 60 / 60) % 24;
        const minute = Math.floor(timeToNY / 1000 / 60) % 60;
        const second = Math.floor(timeToNY / 1000) % 60;
        document.querySelector('.month').innerText =
        declensionNum(month, ['Месяц', 'Месяца', 'Месяцев']);

        document.querySelector('.day').innerText =
        declensionNum(day, ['День', 'Дня', 'Дней']);

        document.querySelector('.hour').innerText =
        declensionNum(hour, ['Час', 'Часа','Часов']);

        document.querySelector('.minute').innerText =
        declensionNum(minute, ['Минута', 'Минуты', 'Минут']);        
        
        document.querySelector('.second').innerText = 
        declensionNum(second, ['Секунда', 'Секунды', 'Секунд']);

        document.querySelector('#month').innerText = month;
        document.querySelector('#day').innerText = day;
        document.querySelector('#hour').innerText = hour;
        document.querySelector('#minute').innerText = minute;
        document.querySelector('#second').innerText = second;
        } else {
            clearInterval(timer);
        }
        
    }, 1000);
}

timer('Jan 1 2024 00:00:00');


