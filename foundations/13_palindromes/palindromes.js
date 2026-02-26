const palindromes = function palindromes(originalStr) {
  let cleanedStr = originalStr.toLowerCase().replace(/[^a-z0-9]/g, "");

  let reversedStr = "";
  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr += cleanedStr[i];
  }

  return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
