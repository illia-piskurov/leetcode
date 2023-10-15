/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = (nums, val) => {
    let len = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[len] = nums[i];
            len++;
        }
    }
    return len;
};
