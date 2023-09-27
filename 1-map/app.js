'use strict';
let Array1 = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 1, name: 'Вася' },
    { id: 1, name: 'Вася' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Вася' },
    { id: 3, name: 'Вася' },
];
const array2 =[];
const setArray = new Set(Array1.map(el => el.id));
Array1.forEach(obj => {
    const checkElement = [...setArray].find(el => el === obj.id)
    setArray.delete(checkElement);
    if(checkElement) {
        array2.push(obj);
    }  
});       
Array1 = array2
console.log(Array1)

