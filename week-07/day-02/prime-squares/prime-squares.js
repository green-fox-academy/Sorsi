'use strict';

//console.log(contentDiv)

let sectonList = document.querySelector('section');

//console.log(sectonList);

for (let i = 2; i < 101; i++) {
  let newDiv = document.createElement('div');
  newDiv.textContent = i;
  sectonList.appendChild(newDiv);
}

const divList = document.querySelectorAll('div')

console.log(divList)

const primeMaker = (divList, callback) => {
  for (let i = 0; i < divList.length; i++) {
    if (callback(parseInt(divList[i].textContent))) {
      divList[i].setAttribute('class', 'prime');
    } else {
      divList[i].setAttribute('class', 'not-prime');
    }
  }
}

const checker = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return num !== 1;
    }
  }
}

primeMaker(divList, checker)