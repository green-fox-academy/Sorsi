'use strict';

window.onload = () => {
  
  let buttons = document.querySelectorAll('button');
  console.log(buttons)

  buttons.forEach(element => {
    element.disabled = true;
    element.addEventListener('click', () => {
      alert(`Thank you, you've successfully signed up for cat facts`)
    })
  });
  

}
