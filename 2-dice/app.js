'use strict';

function random(dice) {
    const max = Number(dice.replace('d', ''));
    if(isFinite(max)){
        return Math.round(Math.random() * (max - 1) + 1);
    }
    return;
}

console.log(random('d20'));