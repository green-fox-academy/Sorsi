'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const sendButton = document.querySelector('.submit')
const modifyButton = document.querySelector('.modify')
const idInput = document.querySelector('#id-input')

http.open('GET', `${host}/:id`, true);

http.onload = () => {
  const response = JSON.parse(http.responseText);
  console.log(response);

  response.forEach((e) => {
    sendButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(idInput.value)
  
      http.open('PUT', `${host}/modify/${e.id}`, true);
      http.setRequestHeader('Content-Type', 'application/json');
    
  });
    http.send()
  });
}
