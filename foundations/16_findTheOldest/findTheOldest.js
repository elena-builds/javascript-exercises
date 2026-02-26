const findTheOldest = function (array) {
  array.sort(function (a, b) {
    if (a.yearOfDeath === undefined) {
      a.yearOfDeath = new Date().getFullYear();
    }
    if (b.yearOfDeath === undefined) {
      b.yearOfDeath = new Date().getFullYear();
    }
    const personA = a.yearOfDeath - a.yearOfBirth;
    const personB = b.yearOfDeath - b.yearOfBirth;

    return personA > personB ? -1 : 1;
  });
  return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
