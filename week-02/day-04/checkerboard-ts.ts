'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function drawPurpleSquare(x: number, y: number, size: number) {
  let lock: boolean = true;
  for (let j: number = 0; j < 8; j++) {    
    for (let i: number = 0; i < 6; i++) {    
      ctx.fillRect(x, y, size, size);
      x += 2*size;      
    }
    if (lock) {
      x = size;
    } else {
      x = 0;
    }
    y += size;
    lock = !lock
  }
}
drawPurpleSquare(0, 0, 50)