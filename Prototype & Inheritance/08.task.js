class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    eat() {
         return `${this.name} ${this.age} eats now`
    };

    sleep() {
        return `${this.name} ${this.age} sleeps now`
    }

}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    bark() {
        return `${this.name} which is ${this.age} years old ${this.breed} barks`
   };
}

class Cat extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    meow() {
        return `${this.name} which is ${this.age} years old ${this.breed} says meow`
   };
}


const animal = new Animal('Lion', 4);
console.log(animal);
console.log(animal.sleep());
console.log(animal.eat());

const dog = new Dog('Pesno', 3, 'German sheppard');
console.log(dog);
console.log(dog.sleep());
console.log(dog.eat());
console.log(dog.bark());

const cat = new Cat('Maca', 3, 'Siam');
console.log(cat);
console.log(cat.sleep());
console.log(cat.eat());
console.log(cat.meow());