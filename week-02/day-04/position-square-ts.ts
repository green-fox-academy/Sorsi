'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x: number, y: number, w: number, h: number) {
  for (let i: number = 0; i < 3; i++) {
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, w, h)
    x += 50;
    y += 50;
    w += 0;
    h += 0;
   }
  }
drawSquare(50, 50, 50, 50)
