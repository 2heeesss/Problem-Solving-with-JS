const new_id = '123_.def';
const check = /[a-z\_\-\.0-9]/;
const checkDoubleDot = /\.\.$/
// 123_.def
// 

//console.log(check2.test('...'));
let b = '';
const a = new_id
    .toLowerCase()
    .split('')
    .filter(value => check.test(value))
    .reduce((acc, cur) => {
        return checkDoubleDot.test(acc + cur) ? acc : acc + cur;
    }, '');

if (a.startsWith('\.')) b = a.slice(1, a.length);
else b = a;

if (b.endsWith('\.')) b = b.slice(0, b.length - 1);

if (b.length === 0) b = 'a';
else if (b.length > 15) {
    b = b.slice(0, 15)
    if (b.endsWith('\.')) b = b.slice(0, 14);
};

if (b.length < 3) {
    v = b[b.length - 1]
    while (b.length !== 3) {
        b = b + v;
    }
}

console.log(b);
//console.log(new_id.toLowerCase());