'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const words = ['apple', 'pear', 'melon', 'grapes'];

const consoling = (array, callback) => {
  
  
  setTimeout(() => { callback; }, 1000);
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

/* const printing = () => {
  console.log('apple');
  setTimeout(() => { console.log('pear'); }, 1000);
  setTimeout(() => { console.log('melon'); }, 3000);
  setTimeout(() => { console.log('grapes'); }, 5000);
}
printing(); */

consoling()

