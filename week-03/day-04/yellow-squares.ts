'strict'

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquare(x: number, y: number, size: number, i: number) { 
  ctx.strokeRect(x, y, size, size);
  if (i <= 1) {
    return 1;
  } 
  else {    
    drawSquare(x + size / 3, y, size / 3, i - 1);
    drawSquare(x, y + size / 3, size / 3, i - 1);
    drawSquare(x + size / 3 * 2, y + size / 3, size / 3, i - 1);
    drawSquare(x + size / 3, y + size / 3 * 2, size / 3, i - 1);
    return;
  }
}

drawSquare(0, 0, canvas.width, 6)