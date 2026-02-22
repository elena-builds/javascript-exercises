const removeFromArray = function (arr, ...rest) {
  const result = arr.filter((num) => !rest.includes(num));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
