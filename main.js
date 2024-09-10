

// ^...$  >>> dots here are equivalent to letters
// ^$     >>> length = 0 

let test = '';
const REGEXP = /^$/;
console.log(REGEXP.test(''));
console.log(REGEXP.test('this is gonna be true'));
