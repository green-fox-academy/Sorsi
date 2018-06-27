'use strict';

const http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/test', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const container = document.querySelector('');