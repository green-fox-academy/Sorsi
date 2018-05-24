'strict'

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = 100;

function drawSqare() {
ctx.fillStyle = 'black';
    ctx.strokeRect(100, 0, size, size)
  }