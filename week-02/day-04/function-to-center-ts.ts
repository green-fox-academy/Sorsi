'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function letsDrawLine(x: number, y: number) {

  for (let k = 0; k < 2; k++) {
    for (let i = 0; i <= canvas.width; i += 20) {
      let y = k * canvas.height;
      ctx.beginPath();
      ctx.moveTo(i, y);
      ctx.lineTo(canvas.width / 2, canvas.height / 2);
      ctx.stroke();
    }
    for (let j = 0; j <= canvas.height; j += 20) {
      let x = k * canvas.width;
      ctx.beginPath();
      ctx.moveTo(x, j);
      ctx.lineTo(canvas.width / 2, canvas.height / 2);
      ctx.stroke();
    }
  }
}

letsDrawLine(0, 0)