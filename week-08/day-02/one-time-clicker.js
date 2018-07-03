'use strict';

let button = document.querySelector('button');

function getTime(event) {
  let time = document.getElementById('time');
  time.firstChild.nodeValue = event.timeStamp;
}

/* button.addEventListener('click', (e) => {
  if(button.disabled = true) {
    button.disabled = false;
  } else {
    button.disabled = false;
  }
}); */

function disableButton() {
  if (button.disabled) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

button.addEventListener('click', getTime);
button.addEventListener('click', disableButton);
