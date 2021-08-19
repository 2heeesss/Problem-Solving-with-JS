const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('');

solution();

function solution() {
    let answer = Array.from({ length: 10001 }, () => false);
    for (let i = 1; i <= 10000; i++) {
        answer[d(i)] = true;
    }

    for (let j = 1; j < answer.length; j++) {
        if (answer[j] === false) console.log(j);
    }
}

function d(index) {
    index = index.toString();
    result = 0;
    for (let j = 0; j < index.length; j++)
        result += Number(index[j]);

    return result + Number(index);
}
