'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function letsDrawSomeRect(sizee: number, coloree: string) {
  for (let i: number = 0; i < 3; i++) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x-(w/2), y-(h/2), w, h);
    w += 20;
    h += 20;
 }
}

letsDrawSomeRect(300, 200, 50, 50)