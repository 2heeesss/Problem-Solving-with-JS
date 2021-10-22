// 풀이 1
function solution(nums) {
    const HALF_NUM = parseInt(nums.length / 2);
    const map = new Map();

    for (const pok of nums) {
        map.get(pok) ? map.set(pok, map.get(pok) + 1) : map.set(pok, 1);
    }

    return map.size > HALF_NUM ? HALF_NUM : map.size;
}


// 풀이 2
function solution(nums) {
    const HALF_NUM = parseInt(nums.length / 2);
    const set = new Set(nums);

    return set.size > HALF_NUM ? HALF_NUM : set.size;
}