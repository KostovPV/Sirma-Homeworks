//Write a program that takes firstName and lastName as parameters
//and returns an object with firstName, lastName, and fullName properties.
// If firstName or lastName changes, fullName should also change.
// If fullName changes to a valid format,
// firstName and lastName should change accordingly.

function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
}

// Define a getter for fullName
Object.defineProperty(Person.prototype, 'fullName', {
    get: function() {
        return `${this._firstName} ${this._lastName}`;
    },
    set: function(newFullName) {
        const names = newFullName.split(' ');
        if (names.length === 2) {
            this._firstName = names[0];
            this._lastName = names[1];
        }
    }
});

// Define getters and setters for firstName
Object.defineProperty(Person.prototype, 'firstName', {
    get: function() {
        return this._firstName;
    },
    set: function(newFirstName) {
        this._firstName = newFirstName;
    }
});

// Define getters and setters for lastName
Object.defineProperty(Person.prototype, 'lastName', {
    get: function() {
        return this._lastName;
    },
    set: function(newLastName) {
        this._lastName = newLastName;
    }
});

// Example usage
const person = new Person('Plamen', 'Kostov');
console.log(person.fullName); // Output: Plamen Kostov
person.firstName = 'Kolio'

console.log(person.fullName); // Output: Kolio Kostov

person.lastName = 'Petrov';
console.log(person.fullName); // Output: Kolio Petrov

person.fullName = 'Stefan Canev';
console.log(person.firstName); // Output: Stefan
console.log(person.lastName); // Output: Canev
console.log(person.fullName);// Output: Stefan Canev