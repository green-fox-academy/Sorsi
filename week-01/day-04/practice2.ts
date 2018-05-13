export {}
'use strict';

let lineCount: number = 4;

for (let l = 0; l < lineCount; l++) {
    let star2 = '';
        for (let m = 0; m < lineCount; m++) {
            star2 += '  '; 
        }
        for (let n = 0; n <= lineCount - l; n++){
            star2 += '*';
        }
        console.log(star2);
}

