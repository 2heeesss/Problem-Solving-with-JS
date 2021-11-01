// 풀이 1
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}