'use strict';

class Billing {
    amount;
    constructor(array) {
        this.array = array;
    }
    calculateTotal() {
        this.amount = this.array.reduce((acc, operation) => {
            return acc + operation;
        },0)
        return this.amount;
    }
}

class FixBilling extends Billing {
     fixBilling() {
        this.amount = this.calculateTotal();
        return this.amount;
     }
     
}

class HourBilling extends Billing {
    constructor(array, hours) {
        super(array);
        this.hours = hours;
    }
    hourBilling() {
        this.amount = this.calculateTotal() * this.hours;
        return this.amount;
    }
}

class ItemBilling extends Billing {
    itemBilling() {
        this.amount = this.calculateTotal() * this.array.length;
        return this.amount
    }
}

const bil = new FixBilling([100, 200, 150]).fixBilling();
console.log(bil);
const bil2 = new HourBilling([100, 200, 150], 2).hourBilling();
console.log(bil2);
const bil3 = new ItemBilling([100, 200, 150]).itemBilling();
console.log(bil3);





