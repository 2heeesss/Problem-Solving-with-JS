const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


solution(input[0], input[1]);

function solution(A, B) {

    let max = 0;
    const l = B.length - A.length + 1;

    for (let i = 0; i < l; i++) {
        let cnt = 0;
        for (let j = 0; j < A.length; j++) {
            if (A[j] === B[i + j]) {
                cnt += 1;
            }
        }
        if (max < cnt) {
            max = cnt;
        }
    }

    console.log(B.length - (max + l - 1));
}