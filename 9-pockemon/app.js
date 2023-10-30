'use strict';

const request = new XMLHttpRequest;
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    const link = data.abilities[0].ability.url;
    console.log(link);

    const request = new XMLHttpRequest;
    request.open('GET', link);
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        console.log(data.effect_entries[1].effect);
    })
})





