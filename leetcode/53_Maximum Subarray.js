// 풀이 1
let maxSubArray = function (nums) {
    const res = new Array(nums.length);
    res[0] = nums[0];

    for (let i = 1, len = nums.length; i < len; i++) {
        res[i] = res[i - 1] + nums[i] > nums[i] ? res[i - 1] + nums[i] : nums[i];
    }
    return Math.max(...res);
};

// 풀이 2
let maxSubArray = function (nums) {
    const res = new Array(nums.length).fill(nums[0]);

    nums.forEach((val, i) => {
        res[i] = res[i - 1] + val > val ? res[i - 1] + val : val;
    });

    return Math.max(...res);
};

// 풀이 3
let maxSubArray = function (nums) {
    for (let i = 1, len = nums.length; i < len; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }

    return Math.max(...nums);
};
