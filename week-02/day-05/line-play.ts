'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

 
    for (let i = 0; i < canvas.width; i += 20) {      
      ctx.strokeStyle = 'purple'
      ctx.beginPath();
      ctx.moveTo(i + 50, 5);
      ctx.lineTo(canvas.width - 10, i);
      ctx.stroke();      
    }  


    for (let j = 0; j < canvas.height; j += 20) {      
      ctx.strokeStyle = 'green'
      ctx.beginPath();
      ctx.moveTo(10, j + 50);
      ctx.lineTo(j, canvas.height - 5);
      ctx.stroke();
    }  

