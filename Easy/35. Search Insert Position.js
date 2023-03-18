/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const findIt = nums.find((element) => element == target)
    return (!findIt) 
      ? (nums.findIndex((element) => element > target)) == -1 
      	? nums.length
        : (nums.findIndex((element) => element > target)) 
      : nums.findIndex((element) => element == target)
};
