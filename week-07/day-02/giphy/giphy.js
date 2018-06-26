'use strict';

const http = new XMLHttpRequest();
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=kOVI7xy20hlTDPgID97mXmM9stlrw07G&q=dog&limit=16&offset=0&rating=G&lang=en', 
true); //meg akarom nyitni a linket és használni az http GET methodot
http.onload = () => { // visszakaptam a response-t
  const response = JSON.parse(http.responseText);
  const container = document.querySelector('#pics');

  response.data.forEach(element => {
    const div = document.createElement('div');
    const image = document.createElement('img');

    image.src = element.images.fixed_height_still.url;
    image.addEventListener('click', () => {
      image.setAttribute('src', element.images.fixed_height.url);
    })

    container.appendChild(image);
  });

}
http.send();

