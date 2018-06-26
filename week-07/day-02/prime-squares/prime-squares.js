'use strict';

//console.log(contentDiv)

let sectonList = document.querySelector('section');

//console.log(sectonList);

for (let i = 2; i < 101; i++) {
  let newDiv = document.createElement('div');
  newDiv.textContent = i;
  sectonList.appendChild(newDiv);
}

let divList = document.querySelectorAll('div')

console.log(divList)

/* function primeMaker () {

  for (let i = 2; i < divList.length; i++) {
    if (divList[i] % divList[i] === 0) {
      return false;
    } else {
      return num !== 1;
    }
  }
} */

const checker = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return num !== 1;
    }
  }
}
