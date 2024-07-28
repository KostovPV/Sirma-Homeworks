// Extend the built-in String object with additional functionality. Implement the following methods:
// ●	ensureStart(str): ensures the current string starts with the given str.
// ●	ensureEnd(str): ensures the current string ends with the given str.
// ●	isEmpty(): returns true if the string is empty, false otherwise.
// ●	capitalize(): returns the string with the first letter capitalized.
// ●	truncateWords(n): returns the string truncated to n words, appending an ellipsis if necessary.

(function() {
    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function() {
        return this.length === 0;
    };

    String.prototype.capitalize = function() {
        if (this.length === 0) {
            return this.toString();
        }
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    String.prototype.truncateWords = function(n) {
        const words = this.split(' ');
        if (words.length <= n) {
            return this.toString();
        }
        return words.slice(0, n).join(' ') + '...';
    };
})();


let example = "hello world";
let example2 = "";
console.log(example.ensureStart("Hello")); // "Hello world"
console.log(example.ensureStart("Hi, ")); // "Hi, Hello world"
console.log(example.ensureEnd('world'));
console.log(example.ensureEnd('whatzaaa nigaa'));

console.log(example.isEmpty());
console.log(example2.isEmpty());

console.log(example.capitalize())

console.log(example.truncateWords(1));