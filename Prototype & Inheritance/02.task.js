// Create a Person class with name and age properties,
// and a Student class that extends Person and adds a school property.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age,school){
        super(name, age);
        this.school = school;
    }
}

const person1 = new Person('Peter', 22);
console.log(person1);
const student1 = new Student('Miro', 22, 'UNSS');
console.log(student1);


