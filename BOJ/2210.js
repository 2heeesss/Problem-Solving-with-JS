const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/lee/Desktop/Education/Problem-Solving-with-JS/BOJ/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const newInput = input.map(list => list.split(' '));

solution(newInput);
function solution(graph) {
    const list = [];
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            DFS(i, j, 1, [graph[i][j]]);
        }
    }
    const s = new Set(list);



    function DFS(y, x, depth, str) {
        if (depth === 6) {
            list.push(str);
            return;
        }

        for (let i = 0; i < 4; i++) {
            let ny = y + dy[i];
            let nx = x + dx[i];
            if (0 > ny || ny >= 5 || 0 > nx || nx >= 5) continue;
            DFS(ny, nx, depth + 1, str + graph[ny][nx]);
        }
    }
    console.log(s.size);
}

