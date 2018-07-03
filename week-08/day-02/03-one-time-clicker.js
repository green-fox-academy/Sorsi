'use strict';

let button = document.querySelector('button');

//-----------------FIRST VERSION-------------------------
function getTime(event) {
  let time = document.getElementById('time');
  time.firstChild.nodeValue = event.timeStamp;
}

function disableButton() {
  button.disabled = true;
}

button.addEventListener('click', getTime);
button.addEventListener('click', disableButton);

//-----------------SECOND VERSION-------------------------
button.addEventListener('click', () => {
  if (!button.disabled) {
    console.log(Date.now());
    button.disabled = true;
  }
});

//-----------------THIRD VERSION-------------------------
let count = 0;

function getDate() {
  count++;
  console.log(Date.now());
  console.log(count);

  if (count === 3) {
    button.removeEventListener('click', getDate);
  }
}

button.addEventListener('click', getDate);
