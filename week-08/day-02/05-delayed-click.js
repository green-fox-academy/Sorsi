'use strict';

/* Create a simple HTML document with one button. 
If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed */

let button = document.querySelector('button');
setTimeout(function(){ document.querySelector('p').innerText = 'HELLO' }, 2000);

button.addEventListener('click', setTimeout)

/* setTimeout(() => greet('secret'), 1000); */