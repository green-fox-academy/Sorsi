'use strict';

/* Create a simple HTML document with one button.
If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
5 seconds elapsed and clicked 3 times
If the user starts clicking before the first 5 seconds, nothing should be printed */

let button = document.querySelector('button');
let message = document.createElement('p');
let body = document.querySelector('body');

let counter = 0;

button.addEventListener('click', () => {
  counter++;
  console.log('nothing')
  if (counter === 3) {
    setTimeout(() => {
      body.appendChild(message);
      message.innerText = '5 seconds elapsed and clicked 3 times';
    }, 5000);
  }
});
