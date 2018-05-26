
/*function division(a: number, b: number) {
    if (b === 0) {
        throw new Error('cant divide with zero')
    }
    return a / b;
}

try {
    console.log(division(3,4));
} catch(error) {
    console.log(error);
} finally {
    console.log('This is a finally block')
}
*/

'use strict';

declare function require(path: string): any;
let fs = require('fs'); 
let chartEncoding = 'utf-a'


fs.redFileSync('00-functions-arrays', chartEncoding);
console.log(fileContent);
