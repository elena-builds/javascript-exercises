const fibonacci = function fibonacci(num) {
  num = Number(num);

  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1) return 1;

  let previous = 0;
  let current = 1;

  for (let i = 2; i <= num; i++) {
    const next = previous + current;
    previous = current;
    current = next;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
