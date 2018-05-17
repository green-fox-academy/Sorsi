'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function drawPurpleSquare(x: number, y: number, size: number) {
  for (let i: number = 0; i < 20; i++) {
    ctx.fillStyle = 'rgb(177,69,243';
    ctx.fillRect(x, y, size, size)
    x += 10;
    y += 10;   
   }
  }
drawPurpleSquare(10, 10, 10)