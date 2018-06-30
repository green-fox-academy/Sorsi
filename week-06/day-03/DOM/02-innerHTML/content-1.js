'use strict';

let paragraph = document.querySelectorAll('p');

//console.log(paragraph)

let lastElement = '';

for (let i = 0; i < paragraph.length; i++) {
  lastElement = paragraph[paragraph.length - 1]
}

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].innerHTML = lastElement.innerHTML;
}

