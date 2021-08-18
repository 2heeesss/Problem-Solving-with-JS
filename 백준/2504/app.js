const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('');


solution(input);
function solution(list) {
    let ans = [];
    const l = list.length;
    for (let i = 0; i < l; i++) {

        ans.push(list.shift());
        //()
        if (ans[ans.length - 2] + ans[ans.length - 1] === '()') {
            ans.pop();
            ans.pop();
            ans.push(2);
        }
        //[]
        else if (ans[ans.length - 2] + ans[ans.length - 1] === '[]') {
            ans.pop();
            ans.pop();
            ans.push(3);
        }
        //(123)
        if (ans[ans.length - 3] + ans[ans.length - 1] === '()' && ans[ans.length - 2] > 0) {
            let a = ans[ans.length - 2];
            ans.pop();
            ans.pop();
            ans.pop();
            ans.push(2 * a);
        }
        //[123]
        else if (ans[ans.length - 3] + ans[ans.length - 1] === '[]' && ans[ans.length - 2] > 0) {
            let b = ans.length - 2;
            ans.pop();
            ans.pop();
            ans.pop();
            ans.push(3 * b);
        }
        // (1,3)
        if (ans[ans.length - 1] + ans[ans.length - 2] > 0) {
            ans.push(ans.pop() + ans.pop());
        }

        console.log(ans);
    }

}