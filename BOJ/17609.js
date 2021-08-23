const fs = require('fs');
const { workerData } = require('worker_threads');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


newInput = []
for (let i = 1; i <= Number(input[0]); i++) {
    newInput.push(input[i]);
}


solution(Number(input[0]), newInput);

function solution(T, words) {
    for (let i = 0; i < T; i++) {
        isPseudoPalin(words[i]);
    }

    function isPseudoPalin(word) {
        let cnt = 0;
        const l = word.length;
        const len = parseInt(l / 2);
        for (let i = 0; i < len; i++) {
            if (word[i] === word[l - i - 1]) continue;
            else {
                isPalin(word.substr(i, l - i * 2 - 1)) || isPalin(word.substr(i + 1, l - i * 2 - 1)) ? cnt = 1 : cnt = 2;
                break;
            }
        }
        console.log(cnt);
    }

    function isPalin(word) {
        const l = word.length;
        const len = parseInt(l) / 2;

        for (let i = 0; i < len; i++) {
            if (word[i] === word[l - i - 1]) continue;
            else return false;
        }
        return true;
    }
}

// 1. 문자열(xabba) 에서 대칭되는 인덱스값이 같은지 확인 
// 2-1. 만약 같다면 cnt = 0 선언한 값 그대로 출력
// 2-2. 만약 다르다면 다른 지점빼고 문자열을 다시 만들어서 대칭인덱스 확인

// xabba에서는 0:x, 4:a가 다름, -> 문자열 두개만들기 abba, xabb
// 문자열 두개 다 확인해서 하나라도 팰린드롬 문자면 cnt = 1
// 둘다 팰린드롬 문자가 아니라면 cnt = 2