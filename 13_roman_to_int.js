/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
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
    if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
      result += romanMap[s[i + 1]] - romanMap[s[i]];
      i += 2;
    } else {
      result += romanMap[s[i]];
      i++;
    }
  }
  return result;
};
