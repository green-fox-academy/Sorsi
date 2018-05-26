'use strict'
export {}

'use strict';

let lineCount: number = 6;
let content: string = '%';

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for (let i = 0; i < lineCount; i++) {
  if (i == 0 || i == lineCount-1) {
    content = '%%%%%';
  } else if (i == 1) {
    content = '%%  %';
  } else if (i == 2) {
    content = '% % %';
  } else if (i == 3) {
    content = '%  %%';
  } else {
    content = '%   %';
  }
  console.log(content);
}