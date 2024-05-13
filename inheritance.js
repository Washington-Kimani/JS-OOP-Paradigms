class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    breathes = function(){
        return console.log(`${this.name} breathes`);
    }

    swims = function(){
        return console.log(`${this.name} swims`);
    }
}


class Dog extends Animal {
    constructor(name, type, furColor){
        super(name, type);
        this.furColor = furColor;
    }

    bark = function(){
        return console.log(`${this.name} barks`);
    }

    showFurColor = function(){
        return console.log(`${this.name} has ${this.furColor} fur`);
    }
}

const Mylo = new Dog("Mylo", "Husky", "Red");

//Dog specific methods a.k.a Dog Behaviours
Mylo.bark();
Mylo.showFurColor();

//General animal behaviour of a dog inherited from animal class
Mylo.breathes();