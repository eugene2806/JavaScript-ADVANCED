'use strict';
 
class Car {
    #carBrand;
    #carModel;
    #_carMileage;

    constructor(carBrand, carModel, carMileage) {
        this.#carBrand = carBrand;
        this.#carModel = carModel;
        this.#carMileage = carMileage;
    }
    set #carMileage(mileage) {
          this.#_carMileage = mileage;
    }
    get #carMileage() {
        return this.#_carMileage;
    }
    changeMileage(newMileage) {
        if(newMileage) {
            this.#carMileage = newMileage;
            return `Пробег изменен на ${this.#carMileage} км`;
        }
        return 'Введите пробег';
    }
    info() {
        return `Марка авто ${this.#carBrand} 
Модель ${this.#carModel} 
Пробег ${this.#carMileage} км`;
    }
}

const car1 = new Car('BMW', 'M4', 22500);
console.log(car1.info());
console.log(car1.changeMileage(10200));
console.log(car1.info());


