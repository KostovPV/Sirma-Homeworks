// Extend the built-in Array object with additional functionality. Implement the following methods:
// ●	first(): returns the first element of the array.
// ●	skip(n): returns a new array excluding the first n elements.
// ●	take(n): returns a new array containing the first n elements.
// ●	product(): returns the product of all array elements.
// ●	unique(): returns a new array with unique elements.
// Structure your code as an IIFE to add these methods to the Array prototype.




(function() {
    Array.prototype.first = function() {
        return this[0];
    };

    Array.prototype.skip = function(n) {
        return this.slice(n);
    };

    Array.prototype.take = function(n) {
        return this.slice(0, n);
    };

    Array.prototype.product = function() {
        return this.reduce((product, element) => product + element, 1);
    };

    Array.prototype.unique = function() {
        return [...new Set(this)];
    };
})();


let example = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]
console.log((example.first()));
console.log((example.skip(2)));
console.log((example.take(3)));
console.log((example.product()));
console.log((example.unique()));
