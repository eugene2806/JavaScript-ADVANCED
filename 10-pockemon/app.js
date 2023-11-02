'use strict';

function getData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            return response.json();
        })
}

getData('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(abilities => {
        return getData(abilities.abilities[0].ability.url);
    })
    .then(data => {
        console.log(data.effect_entries[1].effect);
    })
    .catch(error => {
        console.log(error.message);
    })




