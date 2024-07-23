//Create a function that takes four arguments and returns their sum. 
//Create a partially applied version of this function that
// always adds 5 to the sum of three other numbers.



function sum(a, b, c, d) {
    return a + b + c + d;
  }
 
  
  function partialSum(firstArg) {
    return function(b, c, d) {
      return sum(firstArg, b, c, d);
    };
  }
  
  const addFive = partialSum(5);
  
  
  console.log(addFive(1, 2, 3)); // Output: 11
  