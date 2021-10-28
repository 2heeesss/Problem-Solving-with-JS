// 풀이 1
function solution(left, right) {
    let res = 0;

    for (let i = left; i <= right; i++) {
        isDivisor(i) % 2 === 0 ? res += i : res -= i;
    }
    return res;

    function isDivisor(n) {
        let cnt = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                cnt++;
            }
        }
        return cnt;
    }
}

// 풀이 2
function solution(left, right) {
    // 약수의 개수가 홀수일 때 제곱근은 정수
    let res = 0;
    for (let i = left; i <= right; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            res -= i;
        } else {
            res += i;
        }
    }
    return res;
}

// 풀이 3
function solution(left, right) {
    // 약수의 개수가 홀수일 때 제곱근은 정수
    let res = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            res -= i;
        } else {
            res += i;
        }
    }
    return res;
}