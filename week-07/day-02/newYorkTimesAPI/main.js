'use strict';

const http = new XMLHttpRequest();
http.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11+moon+landing&api-key=a3c423c58bdf4009815afa8f2c5391a1', true);

http.onload = () => {
  const response = JSON.parse(http.responeText);
  console.log(response)
}


http.send();