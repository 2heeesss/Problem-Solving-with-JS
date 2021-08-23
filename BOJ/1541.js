const fs = require('fs');
const { workerData } = require('worker_threads');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const a = input[0].split('-');
// 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오. 최소
// 식의 길이는 50보다 작거나 같다.

solution(input[0].split('-'));

function solution(list) {
    let result = addExpression(list[0]);

    for (let i = 1, len = list.length; i < len; i++) {
        result -= addExpression(list[i]);
    }
    console.log(result);
}

function addExpression(expression) {
    let res = 0;
    for (let j = 0, len = expression.split('+').length; j < len; j++) {
        res += Number(expression.split('+')[j]);
    }
    return res;
}