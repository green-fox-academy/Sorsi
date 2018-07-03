'use strict';

/* Create a simple HTML document with one button. 
If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed */

let button = document.querySelector('button');

button.addEventListener('click', () => {
  setTimeout(() => { 
    document.querySelector('p').innerText = 'HELLO' 
  }, 2000);
});