const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

list = [];
for (let i = 1; i <= Number(input[0]); i++) {
    let arr = input[i].split(' ');
    list.push([Number(arr[0]), Number(arr[1])]);
}

const getSubsets = function (tastes) {
    let flag = new Array(tastes.length).fill(false);
    const subSets = [];

    const subSet = function DFS(depth) { // 부분 집합 구하는 재귀 함수, DFS 알고리즘
        if (depth === tastes.length) { // 트리의 끝에 다다른 것 ==> 재귀 종료 조건
            const subSet = tastes.filter((value, index) => flag[index]); // 해당 flag true => 부분집합 포함
            subSets.push(subSet); // 부분집합들을 담는 배열에 push
            return;
        }

        flag[depth] = true; // 해당 depth의 flag true = 트리의 왼쪽
        subSet(depth + 1); // 트리의 왼쪽에 대해 재귀호출

        flag[depth] = false; // 해당 depth의 flag false = 트리의 오른쪽
        subSet(depth + 1); // 트리의 오른쪽에 대해 재귀 호출
    }
    subSet(0); // depth 0 부터 시작
    subSets.pop();
    return subSets;
}

solution(getSubsets(list));

function solution(lists) {
    let answer = 1000000001;
    for (const list of lists) {
        let sour = 1;
        let bitter = 0;

        for (const x of list) {
            sour *= x[0];
            bitter += x[1];
        }
        if (Math.abs(sour - bitter) < answer) answer = Math.abs(sour - bitter);
    }
    console.log(answer);
}



// solution(input[0], s, b);


// function solution(T, sours, bitters) {
//     const startIndex = findStartIndex(T, sours, bitters);
//     let sour = Number(sours[startIndex]);
//     let bitter = Number(bitters[startIndex]);

//     sours.splice(startIndex, 1);
//     bitters.splice(startIndex, 1);

//     for (let i = 0, len = sours.length; i < len; i++) {

//         if (Math.abs(sour - bitter) > Math.abs((sour * Number(sours[i])) - (bitter + Number(bitters[i])))) {
//             //console.log(sour, bitter);
//             sour *= Number(sours[i]);
//             bitter += Number(bitters[i]);
//             //console.log(sour, bitter);
//         }
//     }
//     console.log(sour, bitter)
// }


// function findStartIndex(T, sList, bList) {
//     let difference = 1000000001;
//     let startIndex = 0;

//     for (let i = 0; i < T; i++) {
//         if (Math.abs(sList[i] - bList[i]) < difference) {
//             difference = Math.abs(sList[i] - bList[i]);
//             startIndex = i;
//         }
//     }
//     return startIndex;
// }