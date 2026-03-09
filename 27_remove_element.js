/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  // when we find a new unique value (different from nums[i])
  for (let i = 0; i < nums.length; i++) {
    // we copy the new unique value to the k-th position and increment k
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  // k is the number of unique values in the array
  return k;
};

console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: 5
