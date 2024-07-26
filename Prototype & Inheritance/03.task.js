//Write a function that receives a class and attaches a species property 
//with the value "Human" and a toSpeciesString() method
//  that returns a string in the format "I am a <species>. <toString()>".
//

//Create class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

//Function that extends the Class
function extendPrototype(Class) {
    Class.prototype.species = "Human";
    Class.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}



// Extend the Person class prototype
extendPrototype(Person);

const person1 = new Person('John', 30);
console.log(person1.toSpeciesString()); // Output: I am a Human. Name: John, Age: 30
