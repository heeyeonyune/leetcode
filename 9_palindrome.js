/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  xToStr = x.toString();

  // compare characters from both ends moving toward the center
  for (let i = 0; i < xToStr.length / 2 + 1; i++) {
    // if the characters don't match, it's not a palindrome
    if (xToStr[i] !== xToStr[xToStr.length - 1 - i]) {
      return false;
    }
  }
  // if all mirrored pairs match, it's a palindrome
  return true;
};
