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
        console.log(this.amount);
     }
}

class HourBilling extends Billing {
    constructor(array, hours) {
        super(array);
        this.hours = hours;
    }
    hourBilling() {
        this.amount = this.calculateTotal() * this.hours;
        console.log(this.amount);
    }
}

class ItemBilling extends Billing {
    itemBilling() {
        this.amount = this.calculateTotal() * this.array.length;
        console.log(this.amount); 
    }
}

const bil = new FixBilling([100, 200, 150]);
bil.fixBilling();
const bil2 = new HourBilling([100, 200, 150], 2);
bil2.hourBilling();
const bil3 = new ItemBilling([100, 200, 150]);
bil3.itemBilling();





