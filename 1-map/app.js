'use strict';
let array1 = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 1, name: 'Вася' },
    { id: 1, name: 'Вася' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Вася' },
    { id: 3, name: 'Вася' },
];

const setArray = new Set(array1.map(el => el.id));
array1 = [...setArray].map(elSet => {
    return array1.find(el => el.id === elSet);;
});       

console.log(array1);


