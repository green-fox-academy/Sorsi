'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath(200, 100);
ctx.moveTo(200, 100);
ctx.lineTo(200, 150);
ctx.stroke();

ctx.strokeStyle = 'pink';
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(100, 150);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(100, 100);
ctx.stroke();
