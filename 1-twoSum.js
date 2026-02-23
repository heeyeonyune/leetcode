/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numArray = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numArray[diff] !== undefined) {
      return [numArray[diff], i];
    }
    numArray[nums[i]] = i;
  }
  // for(let i=0; i<(nums.length-1); i++){
  //     for(let j=i+1; j<nums.length; j++){
  //         if(nums[i]+nums[j]==target){
  //             return [i,j]
  //         }
  //     }
  // }
};
