'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const textArea = document.querySelector('textarea');
const button = document.querySelector('.submit-button');
const result = document.querySelector('.result-message');

window.onload = () => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(textArea.value);

    http.open('POST', `${host}/matrix`, true);
    http.setRequestHeader('Content-Type', 'application/json'); //backendnek megmondja, hogy JSON-t fogok küldeni
    http.onload = () => { //ha a backend visszaküldte a választ (pl. message v status)
      const response = JSON.parse(http.responseText);
      console.log(response)
      result.innerHTML = response.message;
    }
    http.send(JSON.stringify({
      matrixNumbers: textArea.value,
    }));
  });
}