// Create a class hierarchy where Shape is the base class with a calculateArea method. 
// Create Triangle, Square, and Circle classes
// that inherit from Shape and implement their own calculateArea methods.

class Shape {


    calculateArea() {
        return 0;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Example usage
const triangle = new Triangle(5, 10);
console.log(`Triangle area: ${triangle.calculateArea()}`); // Triangle area: 25

const square = new Square(4);
console.log(`Square area: ${square.calculateArea()}`); // Square area: 16

const circle = new Circle(3);
console.log(`Circle area: ${circle.calculateArea()}`); // Circle area: 28.274333882308138

// Optional: Create an instance of Shape (not recommended, but possible)
const shape = new Shape();
try {
    console.log(`Shape area: ${shape.calculateArea()}`);
} catch (error) {
    console.error(error.message); // Method 'calculateArea()' must be implemented.
}
