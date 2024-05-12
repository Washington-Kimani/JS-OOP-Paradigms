class Car {
    constructor(make, model, year){
        this.make = make,
        this.model = model,
        this.year = year
    }

    showInfo(){
        console.log(`This car is a ${this.make} ${this.model} from the year ${this.year}.`)
    }
}

var myCar = new Car('Dodge', 'Charger', 2023);

myCar.showInfo();