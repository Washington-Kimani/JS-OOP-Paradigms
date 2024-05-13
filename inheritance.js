class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    breathes = function(){
        return console.log(`A ${this.name} breathes`);
    }

    swims = function(){
        return console.log(`A {this.name} swims`);
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

Mylo.bark();
Mylo.showFurColor();