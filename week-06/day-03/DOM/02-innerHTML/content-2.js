'use strict';

let animals =  ['apple', 'banana', 'cat', 'dog'];

let list = document.querySelectorAll('li')

console.log(list)

/* 1) */
for (let i = 0; i < list.length; i++) {
  console.log(list[i].innerHTML = animals[i]);
}

/* 2) */
let list2 = document.querySelector('ul');
list2.classList.add("backGround");