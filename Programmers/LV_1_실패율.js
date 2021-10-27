// 풀이 1
// 최악: 500ms
function solution(N, stages) {
    const map = new Map();
    for (let i = 1; i <= N; i++) {
        map.set(i, 0);
    }

    for (const stage of map) {
        let clear = 0;
        let notClear = 0;
        for (const limit of stages) {
            if (stage[0] == limit) {
                notClear++;
            } else if (stage[0] < limit) {
                clear++;
            }
        }
        map.set(stage[0], notClear / (notClear + clear));
    }

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(val => val[0]);
}

// 풀이 2
// 최악: 5800ms
function solution(N, stages) {
    const map = new Map();
    for (let i = 1; i <= N; i++) {
        let notClear = stages.filter(val => val == i).length;
        let clear = stages.filter(val => val > i).length;
        map.set(i, notClear / (notClear + clear));
    }

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(val => val[0]);
}