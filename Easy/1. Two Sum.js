/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = []
    let done = false
    for(let i = 0; i < nums.length; i++) {
        if(done)
            return result        
        nums.map((num, index)=>{
            if(nums[i]+num==target&&index!=i) {
                result.push(i)
                result.push(index)
                done = true
             }
        })
    }
};
