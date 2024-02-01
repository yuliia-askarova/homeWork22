function checkNum (string){
    const regEx = /^\s*[+-]?0*[1-9]\d{5}\s*$/;
    return regEx.test(string);
}

console.log(checkNum('   123456  '));
console.log(checkNum(' -0123456  '));
console.log(checkNum('     -12345  '));
console.log(checkNum('   -023456'));
console.log(checkNum(' -000016   '));
console.log(checkNum(' -000000123456  '));
console.log(checkNum(' - 000000123456  '));
console.log(checkNum(' +000123456  '));