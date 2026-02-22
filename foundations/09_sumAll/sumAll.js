const sumAll = function (a, b) {
  let arr = [a, b];
  arr.sort((a, b) => a - b);
  let c = arr[0];
  let d = arr[1];
  let sum = c + d;

  if (
    c < 0 ||
    d < 0 ||
    typeof c !== "number" ||
    typeof d !== "number" ||
    !Number.isInteger(c) ||
    !Number.isInteger(d)
  ) {
    return "ERROR";
  }

  for (let i = c + 1; i < d; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
