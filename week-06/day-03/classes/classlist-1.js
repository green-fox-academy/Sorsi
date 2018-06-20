"use strict";

let paragraph = document.querySelectorAll('p');

console.log(paragraph)

for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[paragraph.length - 1].getAttribute('class') == 'dolphin') {
    paragraph[0].innerHTML = 'pear'; 
  }
}

for (let i = 0; i < paragraph.length; i++) {
  if ('paragraph?', paragraph[i].classList.contains('apple')) {
    paragraph[2].innerHTML = 'dog';
  }
}

for (let i = 0; i < paragraph.length; i++) {
  paragraph[0].classList.add('red')
  paragraph[1].classList.remove('balloon')
}

