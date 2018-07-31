'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const textArea = document.querySelector('textarea');
const button = document.querySelector('.submit-button');

window.onload = () => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(textArea.value);

    http.open('POST', `${host}/matrix`, true);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onload = () => {
      const response = JSON.parse(http.responseText);
      console.log(response)
    }
    http.send(JSON.stringify({
      matrix: textArea.value,
    }));
  });
}