//Create a function that takes three arguments and returns their product. 
//Curry this function so it can be called with one argument at a time.

function multiply(a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      }
    }
  }
  
  console.log(multiply(2)(3)(4)); // Output: 24