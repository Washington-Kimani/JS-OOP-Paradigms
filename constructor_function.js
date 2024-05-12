function Car(brand, model,  year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let myCar = new Car('Toyota', 'Wish', 2003);

Car.prototype.showData = function(){
    console.log(`The car is a ${this.brand} ${this.model} from the year ${this.year}.`);
}

myCar.showData();