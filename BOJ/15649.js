const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/lee/Desktop/Education/Problem-Solving-with-JS/BOJ/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


const solution = function (n, m) {
    const answer = [];
    let visted = [];
    const nums = new Array(n)
        .fill(0)
        .map((val, index) => index + 1);


    for (let i = 0; i < n; i++) {
        visted = new Array(n).fill(false);
        permutation(nums, i, 1, visted, []);
    }


    function permutation(list, currentIndex, depth, visted, result) {
        visted[currentIndex] = true;
        result.push(list[currentIndex]);

        if (depth === m) {
            answer.push(result.slice());
            return;
        };
        for (let i = 0, len = list.length; i < len; i++) {
            if (!visted[i]) {
                permutation(list, i, depth + 1, visted, result);
                visted[i] = false;
                result.pop();
            }
        }
    }
    for (const nums of answer) {
        console.log(nums.join(' '));
    }
}


solution(parseInt(input[0]), parseInt(input[1]));