//Create a function that returns an object with two methods:
// one to get a private variable and 
// one to set it. Use a closure to maintain the private variable.
//...
function createPrivateCounter() {
    let count = 0;
    return {
        increment: function () {
            count++
        },
        getCount: function () {
            return count;
        }
    }
}
const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
console.log(counter.getCount()); // Output: 2
counter.increment();
console.log(counter.getCount()); // Output: 3



