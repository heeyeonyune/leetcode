/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  xToStr = x.toString();

  for (let i = 0; i < xToStr.length / 2 + 1; i++) {
    if (xToStr[i] !== xToStr[xToStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
