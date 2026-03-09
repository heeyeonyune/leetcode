/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // map each Roman numeral to its integer value
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let i = 0;
  let result = 0;
  while (i < s.length) {
    // check for subtractive pair like IV, IX, XL, etc.
    if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
      // add the difference (e.g. 5 - 1 for "IV") and skip both characters in the pair
      result += romanMap[s[i + 1]] - romanMap[s[i]];
      i += 2;
    } else {
      // normal case: just add the current value
      result += romanMap[s[i]];
      i++;
    }
  }
  return result;
};

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
