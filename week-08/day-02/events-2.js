'use strict';

let button = document.querySelector('button');
let ul = document.querySelectorAll('ul li');
let result = document.querySelector('.result')

button.addEventListener('click', () => { 
  result.innerHTML = ul.length;
});
