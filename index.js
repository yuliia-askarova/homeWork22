function checkNum (string){
    const subStr = /\s*/;
    const result = string.replace(subStr, '');
    
    const regEx = /[-+]?[0]*[1-9]\d{5}/;
    const regEx1 = /[-+]?[^\S][0]*[1-9]\d{5}/;

    if (regEx1.test(result)) {
        return false;
    }
    
    return regEx.test(result);
}

console.log(checkNum('   123456  '));
console.log(checkNum(' -0123456  '));
console.log(checkNum('     -12345  '));
console.log(checkNum('   -023456'));
console.log(checkNum(' -000016   '));
console.log(checkNum(' -000000123456  '));
console.log(checkNum(' - 000000123456  '));
console.log(checkNum(' +000123456  '));