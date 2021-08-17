const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let inputList = input[1].split(' ');
for (let i = 0; i < inputList.length; i++) {
    inputList[i] = Number(inputList[i]);
}

solution(input[0], inputList);

function solution(N, list) {
    let ans = Array.from({ length: N }, () => false);
    ans[list[0]] = 1;
    for (let j = 1; j < list.length; j++) {
        let cnt = 0;
        for (let k = 0; k < ans.length; k++) {
            if (ans[k] === false) {
                cnt += 1;
            }
            if (cnt === list[j] + 1) {
                ans[k] = j + 1;
                break;
            }
        }
    }
    console.log(ans.join(' '));
}

