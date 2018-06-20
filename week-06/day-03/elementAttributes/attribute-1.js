'use strict';

let greenFox = document.querySelector('img');

//console.log(greenFox.getAttribute('src'));

greenFox.setAttribute('src', 'https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5OS8zMjkvb3JpZ2luYWwvY2hpbXBzLWVhdC1tb25rZXktYnJhaW5zLTAx');

let linkPoint = document.querySelector('a');

//console.log(linkPoint.getAttribute('href'))

linkPoint.setAttribute('href', 'https://www.greenfoxacademy.com');

let secondButton = document.querySelector('.this-one');

secondButton.innerHTML = 'Dont\'t click';

console.log(secondButton)

