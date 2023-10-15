/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = (nums) => {
    let len = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[len] = nums[i];
            len++; 
        }
    }
    return len;
};