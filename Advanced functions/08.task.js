//Function Chaining
//Create an object with methods that manipulate a string (e.g., toUpperCase, toLowerCase).
// Ensure the methods return this so the methods can be chained together.

const stringManipulator = {
  value: '',

  setValue: function(str) {
    this.value = str;
    return this;
  },

  toUpperCase: function() {
    this.value = this.value.toUpperCase();
    return this;
  },

  toLowerCase: function() {
    this.value = this.value.toLowerCase();
    return this;
  },

  print: function() {
    console.log(this.value);
    return this;
  }
};


stringManipulator.setValue('Hello')
  .toUpperCase()
  .print()
  .toLowerCase()
  .print();


