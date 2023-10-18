'use strict';
 
const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function() {
    console.log(`${this.name} ${this.language}`);
}

const Ork = function (race, name, language, weapon) {
    Character.call(this, race, name, language);
    this.weapon = weapon;
}

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.punchMethod = function() {
    console.log(`Удар ${this.weapon}ом`);
}

const Elf = function (race, name, language, spellType) {
    Character.call(this, race, name, language);
    this.spellType = spellType;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function () {
    console.log(`Заклинание ${this.spellType}`);
}

const greenOrk = new Ork('ORK', 'Hulk', 'Orksk', 'Топор');
greenOrk.speak();
greenOrk.punchMethod();

const whiteElf = new Elf('Elf', 'Anorsel', 'Sindarin', 'FireBall');
whiteElf.speak();
whiteElf.createSpell();
console.log(whiteElf);


