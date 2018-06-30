'use strict';

const button = document.querySelector('button');

button.onclick = () => {
  if (document.body.classList.contains('party')) {
    document.body.classList.remove('party');
  } else {
    document.body.classList.add('party')
  }
};
