function solution(lottos, win_nums) {
    const res = [];

    const correctNum = lottos.reduce((acc, cur) => {
        return win_nums.includes(cur) ? acc + 1 : acc;
    }, 0);
    const zeroCnt = lottos.reduce((acc, cur) => {
        return cur === 0 ? acc + 1 : acc;
    }, 0);
    res.push(correctNum + zeroCnt);
    res.push(correctNum);
    console.log(res);
    const answer = res.map(value => {
        if (value === 0) return 6;
        return 7 - value;
    }, []);

    return answer;
}