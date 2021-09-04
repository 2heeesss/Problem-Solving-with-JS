let twoSum = function (nums, target) {
    for (let i = 0, len = nums.length; i < len; i++) {
        for (let j = 1 + i, len = nums.length; j < len; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};