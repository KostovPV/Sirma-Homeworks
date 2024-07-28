//Write a function that returns three classes:
// Figure, Circle, and Rectangle.
// Figure has a units property (default "cm"),
// a getter area, and methods changeUnits and toString.
// Circle and Rectangle extend Figure and override area and toString appropriately.

function returnClasses() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return 0;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }

        convertUnits(value) {
            if (this.units === "m") {
                return value / 100;
            } else if (this.units === "mm") {
                return value * 10;
            }
            return value; // default cm
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get area() {
            const radius = this.convertUnits(this._radius);
            return Math.PI * radius * radius;
        }

        toString() {
            const radius = this.convertUnits(this._radius);
            return `Circle - radius: ${radius}${this.units}, area: ${this.area.toFixed(2)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get area() {
            const width = this.convertUnits(this._width);
            const height = this.convertUnits(this._height);
            return width * height;
        }

        toString() {
            const width = this.convertUnits(this._width);
            const height = this.convertUnits(this._height);
            return `Rectangle - width: ${width}${this.units}, height: ${height}${this.units}, area: ${this.area.toFixed(2)}`;
        }
    }

    return { Figure, Circle, Rectangle };
}

const { Figure, Circle, Rectangle } = returnClasses();

const c = new Circle(5);
console.log(c.toString()); // Circle - radius: 5cm, area: 78.54

c.changeUnits('mm');
console.log(c.toString()); // Circle - radius: 50mm, area: 7853.98

c.changeUnits('m');
console.log(c.toString()); // Circle - radius: 0.05m, area: 0.01

const r = new Rectangle(3, 4, 'cm');
console.log(r.toString()); // Rectangle - width: 3cm, height: 4cm, area: 12.00

r.changeUnits('mm');
console.log(r.toString()); // Rectangle - width: 30mm, height: 40mm, area: 1200.00

r.changeUnits('m');
console.log(r.toString()); // Rectangle - width: 0.03m, height: 0.04m, area: 0.00
