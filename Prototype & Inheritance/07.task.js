// Create a base class Employee with properties name and salary.
// Extend it with classes Manager and Engineer. 
// Add methods to calculate bonuses based on different criteria for managers and engineers.

class Employe {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employe {
    constructor(name, salary, sales) {
        super(name, salary)
        this.sales = sales;
    }
    get bonus() {
        if (this.sales > 20) {
            return `4000$`
        } else {
            return `No bonus`
        }
    }
}


class Engineer extends Employe {
    constructor(name, salary, deficiencies) {
        super(name, salary)
        this.deficiencies = deficiencies;
    }
    get bonus() {
        if (this.deficiencies < 10) {
            return `5000$`
        } else {
            return `No bonus - you need to work harder`
        }
    }
}

const employe = new Employe('Peter', 3000);
console.log(employe);

const manager = new Manager('Alex', 3000, 60);
console.log(manager);
console.log(manager.bonus);

const engineer = new Engineer('Peter', 3000, 7);
console.log(engineer);
console.log(engineer.bonus);