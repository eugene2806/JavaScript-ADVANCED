'use strict';

class Character {
    constructor(race, name, language) {
            this.race = race;
            this.name = name;
            this.language = language;
    }

    speak() {
        console.log(`${this.name} ${this.language}`);
    }
}

class Ork extends Character {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    speak() {
        console.log(`Меня зовут ${this.name}, мой язык ${this.language}`);
    }

    punchMethod() {
        console.log(`Удар ${this.weapon}ом`);
    }
}

class Elf extends Character {
    constructor(race, name, language, spellType) {
        super(race, name, language);
        this.spellType = spellType;
    }

    speak() {
        console.log(`Меня зовут ${this.name}, я говорю на ${this.language}`);
    }

    createSpell() {
        console.log(`Заклинание ${this.spellType}`);
    }
}



const greenOrk = new Ork('ORK', 'Hulk', 'Orksk', 'Топор');
greenOrk.speak();
greenOrk.punchMethod();

const whiteElf = new Elf('Elf', 'Anorsel', 'Sindarin', 'FireBall');
whiteElf.speak();
whiteElf.createSpell();



