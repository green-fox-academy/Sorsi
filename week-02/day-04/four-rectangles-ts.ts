'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function getRandomColor(): string {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function letsDrawSomeRect(x: number, y: number, w: number, h: number,) {
  for (let i: number = 0; i < 4; i++) {
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(x, y, w, h);
    x += 50;
    y += 20;
    w += 20;
    h += 10;
 }
}

letsDrawSomeRect(50, 50, 50, 50)