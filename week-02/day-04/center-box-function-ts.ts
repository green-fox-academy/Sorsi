'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function letsDrawSomeRect(x: number, y: number, w: number, h: number) {
  for (let i: number = 0; i < 3; i++) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, w, h);
    w += 20;
    h += 20;
 }
}

letsDrawSomeRect(50, 50, 50, 50)