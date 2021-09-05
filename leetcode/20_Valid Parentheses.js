s = "()"

var isValid = function (s) {
    const res = s
        .split('')
        .reduce((acc, cur) => (acc + cur).replace(/\(\)|\{\}|\[\]/g, ''));

    return (!res.length);
};

isValid(s);