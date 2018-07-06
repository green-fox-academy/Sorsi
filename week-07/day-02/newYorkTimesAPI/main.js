'use strict';

const http = new XMLHttpRequest();
http.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11+moon+landing&api-key=a3c423c58bdf4009815afa8f2c5391a1', true);

http.onload = () => {
  console.log(http.responseText)
  const response = JSON.parse(http.response);
  response.forEach(element => {
    console.log(response)
    
  });

}
http.send();