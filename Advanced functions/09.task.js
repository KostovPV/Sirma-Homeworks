//Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1.
// Use a closure to keep the current number.
function getFibonacci() {
    let a = 0;
    let b = 1;
    return function() {
      let next = a + b;
      a = b;
      b = next;
      return a;
    };
  }

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21
