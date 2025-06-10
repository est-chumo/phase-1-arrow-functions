// 1. Function expression for divide
const divide = function(a, b) {
  return a / b;
};

// 2. Arrow function for square
const square = num => num * num;

// 3. Arrow function for add (with logging)
const add = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
};

// Export all functions for testing
module.exports = {
  divide,
  square,
  add
};
