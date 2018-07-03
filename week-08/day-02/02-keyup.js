'use strict';

window.addEventListener('keyup', event => {
  console.log(event);
  document.body.style.background = 'red';
  document.querySelector('h1').innerText = `${event.key} is the last pressed key.`; 
});
