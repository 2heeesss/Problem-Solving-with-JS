// 풀이 1
function solution(answers) {
    const check1 = [1, 2, 3, 4, 5];
    const check2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const check3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const corrects = new Array(4).fill(0);
    const res = [];
    let maxVal = -1;

    answers.forEach((val, i) => {
        if (check1[i % 5] == answers[i]) corrects[1] += 1;
        if (check2[i % 8] == answers[i]) corrects[2] += 1;
        if (check3[i % 10] == answers[i]) corrects[3] += 1;
    });

    for (let i = 1; i < 4; i++) {
        if (maxVal < corrects[i]) {
            maxVal = corrects[i];
            res.length = 0;
            res.push(i);
        } else if (maxVal == corrects[i]) {
            res.push(i);
        }
    }

    return res;
}


// 풀이 2
function solution(answers) {
    const check1 = [1, 2, 3, 4, 5];
    const check2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const check3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const corrects = new Array(4).fill(0);
    const res = [];
    let maxVal;

    corrects[1] = answers.filter((val, i) => val == check1[i % 5]).length;
    corrects[2] = answers.filter((val, i) => val == check2[i % 8]).length;
    corrects[3] = answers.filter((val, i) => val == check3[i % 10]).length;

    maxVal = Math.max(corrects[1], corrects[2], corrects[3]);

    corrects.forEach((val, i) => {
        if (maxVal == val) res.push(i);
    });

    return res;
}