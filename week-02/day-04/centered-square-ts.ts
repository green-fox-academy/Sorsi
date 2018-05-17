'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

ctx.fillStyle = 'rgb(60, 184, 120)';
ctx.fillRect(250, 150, 100,100);