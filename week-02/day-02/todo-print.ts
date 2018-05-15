export {}

'use strict';

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

export{}
'use strict';

let todoText: string = ' - Buy milk\n';
let milk: string = ' - Download games\n';
let diablo: string = ' - Diablo';

todoText =`My todo:\n ${todoText} ${milk} ${diablo}`;

console.log(todoText);