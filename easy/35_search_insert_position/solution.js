/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = (nums, target) => {
    let min = 0;
    let max = nums.length;
    let mid;

    if (target > nums[max-1]) {
        return max;
    }

    while (min <= max) {
        mid = Math.floor((min + max) / 2);

        if (nums[mid] == target) {
            return mid;
        }

        if (target < nums[mid]) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return min;
};