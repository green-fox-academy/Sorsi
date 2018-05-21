'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = 5;

function drawLinesLeftTopCorner (xtop: number, ytop: number, xbottom: number, ybottom: number) {
  for (let i: number = 0; i < 40; i++) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(xtop, ytop);
    ctx.lineTo(xbottom, ybottom);
    ctx.stroke();
    ytop += size;
    xbottom -= size;
  }
}

drawLinesLeftTopCorner (canvas.width/2, 0, canvas.height/2-size, canvas.height/2)

function drawLinesRightTopCorner (xtop2: number, ytop2: number, xbottom2: number, ybottom2: number) {
  for (let j: number = 0; j < 40; j++) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(xtop2, ytop2);
    ctx.lineTo(xbottom2, ybottom2);
    ctx.stroke();
    ytop2 += size;
    xbottom2 += size;    
  }
}

drawLinesRightTopCorner (canvas.width/2, 0, canvas.height/2, canvas.height/2)

function drawLinesLeftBottomCorner (xtop3: number, ytop3: number, xbottom3: number, ybottom3: number) {
  for (let k: number = 0; k < 40; k++) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(xtop3, ytop3);
    ctx.lineTo(xbottom3, ybottom3);
    ctx.stroke();
    ytop3 += size;
    xbottom3 += size
  }
}

drawLinesLeftBottomCorner (canvas.width/2, canvas.height/2+size, 0, canvas.height/2)

function drawLinesRightBottomCorner (xtop4: number, ytop4: number, xbottom4: number, ybottom4: number) {
  for (let l: number = 0; l < 40; l++) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(xtop4, ytop4);
    ctx.lineTo(xbottom4, ybottom4);
    ctx.stroke();
    ytop4 += size;
    xbottom4 -= size; 
  }
}

drawLinesRightBottomCorner (canvas.width / 2, canvas.height / 2 + size, canvas.width, canvas.height / 2 )

ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200, 400);
    ctx.stroke();