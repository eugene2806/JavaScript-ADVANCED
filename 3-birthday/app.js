'use strict';

function checkAge(birthday) {
    const now = new Date();
    const userBirthday = new Date(birthday);
    const year = now.getFullYear() - userBirthday.getFullYear();

    if((year > 14) ) {
        return true;
    }
    if (year === 14 && (now.getMonth() > userBirthday.getMonth())) {
        return true;
    }
    if (year === 14 && (now.getMonth() === userBirthday.getMonth())  &&
        (now.getDate() >= userBirthday.getDate())) {
        return true;
    }
    return false;
}

console.log(checkAge('2010-11-04'));
console.log(checkAge('2009-10-04'));