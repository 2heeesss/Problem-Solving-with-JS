const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('');


solution(input);
function solution(list) {
    let ans = [];
    const l = list.length;
    let stk = [];

    let nList = list.slice();
    for (let i = 0; i < l; i++) {
        v = nList.shift();
        stk.push(v);
        if (stk[stk.length - 2] + stk[stk.length - 1] === '[]' || stk[stk.length - 2] + stk[stk.length - 1] === '()') {
            stk.pop();
            stk.pop();
        }
    }


    if (stk.length > 0) { console.log(0); }
    else {
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

            //(숫자)
            if (ans[ans.length - 3] + ans[ans.length - 1] === '()' && ans[ans.length - 2] > 0) {
                let a = ans[ans.length - 2];
                ans.pop();
                ans.pop();
                ans.pop();
                ans.push(2 * a);
            }
            //[숫자]
            else if (ans[ans.length - 3] + ans[ans.length - 1] === '[]' && ans[ans.length - 2] > 0) {
                let b = ans[ans.length - 2];
                ans.pop();
                ans.pop();
                ans.pop();
                ans.push(3 * b);
            }

            // (숫자,숫자)
            if (ans[ans.length - 2] + ans[ans.length - 1] > 0) ans.push(ans.pop() + ans.pop());
        }
        console.log(Number(ans[0]));
    }
}


    // function completeBraket(arr, len) {
    //     let stk = [];
    //     for (let i = 0; i < len; i++) {
    //         v = arr.shift();
    //         stk.push(v);
    //         if (stk[stk.length - 1] + stk[stk.length + 1] === '[]' || stk[stk.length - 1] + stk[stk.length + 1] === '()') {
    //             stk.pop();
    //             stk.pop();
    //         }
    //     }
    //     if (stk.length > 0) {
    //         return false;
    //     }
    //     return true;
    // }
    // function convertBraketToNum(braket, arr) {
    //     let v = 0;
    //     if (braket === '()') v = 2;
    //     else v = 3;

    //     if (arr[arr.length - 2] + arr[arr.length - 1] === braket) {
    //         arr.pop();
    //         arr.pop();
    //         arr.push(v);
    //     }
    //     return arr;
    // }

    // function multipleTwoOrThree(braket, mid, arr) {
    //     if (braket === '()') v = 2;
    //     else v = 3;

    //     if (arr[arr.length - 3] + arr[arr.length - 1] === braket && mid > 0) {
    //         arr.pop();
    //         arr.pop();
    //         arr.pop();
    //         arr.push(v * mid);
    //     }
    //     return arr;
    // }
    // function PlusNum(left, right, arr) {
    //     if (left + right > 0) arr.push(arr.pop() + arr.pop());
    //     return arr;
    // }