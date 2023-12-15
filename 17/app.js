'use strict';

const cpuDescription = {
  producer: 'AMD',
  amount: 250000,
  family: 'AMD Ryzen 7',
  name: 'Ryzen 7 3700X',
  image: 'https://i.ytimg.com/vi/_HDRGUr5s2s/maxresdefault.jpg',
  sale: function(percent) {
    return this.amount - this.amount / 100 * percent;
  } 
};

const memory = {
//   producer: 'Hynix',
//   amount: 60,
//   memory: 2048,
//   name: 'Hynix DDR4-2666',
//   family: 'DDR4',
  __proto__: cpuDescription
};

  memory.producer = 'Hynix';
  memory.amount = 60;
  memory.memory = 2048;
  memory.name = 'Hynix DDR4-2666';
  memory.family = 'DDR4';
  memory.image =
    'https://i.ebayimg.com/00/s/NzI5WDE2MDA=/z/ZGMAAOSwcgthGUBH/$_57.JPG?set_id=8800005007';
console.log(memory)

console.log(cpuDescription.sale(10));