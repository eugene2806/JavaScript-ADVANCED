'use strict';

function random(dice) {
    const max = Number(dice.replace('d', ''));
    if(isFinite(max)){
        const res = Math.round(Math.random() * (max - 1) + 1);
        console.log(res);
    }
    return;
}

random('d20');