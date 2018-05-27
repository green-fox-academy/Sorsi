'use strict'

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquare(x: number, y: number, size: number, i: number) {  
  ctx.strokeRect(x, y, size, size);  
  if (i <= 1) {
    return 1;
  } 
  else {
    setTimeout(function() {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 6;
      drawSquare(x - size / 4, y - size / 4, size / 2, i - 1); //left top
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 9;
      drawSquare(x + size / 4 * 3, y - size / 4, size / 2, i - 1); // right top
      ctx.strokeStyle = 'yellow';
      ctx.lineWidth = 5;
      drawSquare(x - size / 4, y + size / 4 * 3, size / 2, i - 1); //left bottom
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 1;
      drawSquare(x + size / 4 * 3, y + size / 4 * 3, size / 2, i - 1);
    return;
    }, 600);
  }
}

drawSquare(100, 100, canvas.width / 2, 4);