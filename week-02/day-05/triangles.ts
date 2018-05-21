'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = 20

function drawLinesToTheLeft (xtop: number, ytop: number, xbottom: number, ybottom: number) { 
  for (let i: number = 0; i < 40; i++) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(xtop, ytop);
    ctx.lineTo(xbottom, ybottom);
    ctx.stroke();
    xtop += size/2;
    ytop += size;  
    xbottom += size;
  }
}

drawLinesToTheLeft (200, 0, 0, 400)

function drawLinesToTheRight (xtop1: number, ytop1: number, xbottom1: number, ybottom1: number) {
  for (let j: number = 0; j < 40; j++) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(xtop1, ytop1);
    ctx.lineTo(xbottom1, ybottom1);
    ctx.stroke();
    xtop1 -= size/2;
    ytop1 += size;
    xbottom1 -= size;
  }
}

drawLinesToTheRight (200, 0, 400, 400)

function drawHorizont (xtop2: number, ytop2: number, xbottom2: number, ybottom2: number) {
  for(let k: number = 0; k < 40; k++) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(xtop2, ytop2);
    ctx.lineTo(xbottom2, ybottom2);
    ctx.stroke();
    xtop2 -= size/2;
    ytop2 += size;
    xbottom2 += size/2;
    ybottom2 += size;
  }
}

drawHorizont (200-size/2, size, 200 + size/2, size)