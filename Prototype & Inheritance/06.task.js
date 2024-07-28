// Create a base class Vehicle with properties make and model.
// Create Car and Bike classes that extend Vehicle 
// and add properties specific to each type (e.g., doors for Car, type for Bike).

class Vehicle {
    constructor (make, model) {
        this.make = make;
        this.model = model;
    }

}

class Car extends Vehicle {
    constructor (make, model,doors) {
        super(make, model);
        this.doors = doors;
    }
}

class Bike extends Vehicle {
    constructor (make, model, type) {
        super(make, model);
        this.type = type;
    }
}


const vehicle = new Vehicle('bmw', '330');
console.log(vehicle);
const car  = new Car('bmw', '330', '5');
console.log(car);

const bike = new Bike('Honda', 'CBR', 'Sports');
console.log(bike);

