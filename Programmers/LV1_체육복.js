// 풀이 1
function solution(n, lost, reserve) {
    // 1부터 n까지 key, 1 value
    let res = 0;
    const students = new Map();
    for (let i = 1; i <= n; i++) {
        students.set(i, 1);
    }
    // 잃어버렸으면 value 감소
    for (const man of lost) {
        students.set(man, students.get(man) - 1);
    }
    // 여분가져오면 value 증가
    for (const man of reserve) {
        students.set(man, students.get(man) + 1);
    }
    // 맵 순회(forEach)하며 value가 0이라면 앞, 뒤 확인 (앞부터) 여분있으면 감소하고 현재 value 증가
    students.forEach((val, key) => {
        if (val <= 0) {
            if (students.get(key - 1) > 1) {
                students.set(key, 1);
                students.set(key - 1, students.get(key - 1) - 1);
            } else if (students.get(key + 1) > 1) {
                students.set(key, 1);
                students.set(key + 1, students.get(key + 1) - 1);
            }
        }
    });
    // forEach로 순회하며 값 있으면 +1
    students.forEach(val => {
        if (val > 0) res++;
    });
    // return 체육수업 학생 최댓값
    return res;
}


// 풀이 2
function solution(n, lost, reserve) {
    const students = new Array(n + 2).fill(1)
    lost.forEach(val => students[val]--);
    reserve.forEach(val => students[val]++);
    students.forEach((val, i) => {
        if (val < 1) {
            if (students[i - 1] > 1) {
                students[i - 1]--;
                students[i]++;
            } else if (students[i + 1] > 1) {
                students[i + 1]--;
                students[i]++;
            }
        }
    });

    return students.reduce((acc, cur) => cur > 0 ? acc + 1 : acc) - 2;
}