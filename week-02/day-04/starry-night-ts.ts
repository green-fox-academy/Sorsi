'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle="black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function getRandomColor(): string {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawPurpleSquare(x: number, y: number, size: number) {
  for (let i: number = 0; i < 20; i++) {
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(x, y, size, size)
    x += 10;
    y += 10;   
   }
  }
drawPurpleSquare(10, 10, 10)
