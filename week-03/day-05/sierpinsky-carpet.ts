'use strict'
export {}

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(150, 150, 150, 0, 150);
ctx.stroke();

