'use strict';

let animals =  ['apple', 'banana', 'cat', 'dog'];

let list = document.querySelectorAll('li')

console.log(list)

for (let i = 0; i < list.length; i++) {
  console.log(list[i].innerHTML = animals[i]);
}
