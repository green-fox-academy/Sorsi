'use strict';

let url = 'http://api.icndb.com/jokes/random';

fetch(url)
  .then( (response) => response.json())
  .then( (myJSON) => console.log(myJson));

/* const http = new XMLHttpRequest();
http.open('GET', `http://api.icndb.com/jokes/random`, true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const container = document.querySelector('.container');

  response.data.forEach((element) => {
    container.innerHTML = element.id;
  });
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
  http.send();
}); */