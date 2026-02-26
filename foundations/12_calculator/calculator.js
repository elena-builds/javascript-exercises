const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function sum(array) {
  return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function multiply(array) {
  return array.reduce((result, num) => result * num, 1);
};

const power = (a, b) => a ** b;

const factorial = function factorial(num) {
  if (num > 0) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    return result;
  }
  return 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
