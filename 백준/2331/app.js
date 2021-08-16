const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


solution(input[0], Number(input[1]));


function solution(D, P) {
    ans = [+D];

    while (true) {

        nD = nextD(ans[ans.length - 1].toString(), P);

        if (ans.includes(nD)) {
            console.log(ans.indexOf(nD))
            break;
        }
        else {
            ans.push(nD);
        }
    }

    function nextD(D, P) {
        let res = 0;
        for (i in D) {
            res += D[i] ** P;
        }
        return res;
    }

}