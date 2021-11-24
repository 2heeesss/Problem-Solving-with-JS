/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums, depth = nums.length) => {
  const res = [];
  if (depth === 1) return nums.map(num => [num]);

  nums.forEach((fasten, index, array) => {
    // fasten을 제외한 나머지 배열 구하기
    const remainder = [...array.slice(0, index), ...array.slice(index + 1)];
    // 나머지 배열로 재귀 구하기
    const permutations = permute(remainder, depth - 1);
    // 재귀 구한 배열에 fasten 붙이기
    const attach = permutations.map(permutation => [fasten, ...permutation]);
    // res에 넣기
    res.push(...attach);
  });

  return res;
};
