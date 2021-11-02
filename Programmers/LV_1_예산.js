// 풀이 1
function solution(d, budget) {
    return d
        .sort((a, b) => a - b)
        .reduce((acc, cur) => {
            if (budget - cur < 0) {
                return acc;
            } else {
                budget -= cur;
                return (acc += 1);
            }
        }, 0);
}
