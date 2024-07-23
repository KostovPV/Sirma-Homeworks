//Create two functions, one that doubles a number and one that squares a number.
// Create a third function that composes these two functions
// to first double and then square a number.


function double(num) {
    return num * 2;
}
function square(num) {
    return num * num;
}


function compose(func1, func2) {
    return function (value) {
        return func2(func1(value));
    };
}

const doubleThenSquare = compose(double, square);

// Test the new function
console.log(doubleThenSquare(3)); // Output: 36