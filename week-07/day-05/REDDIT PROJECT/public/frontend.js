'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

http.onload = () => {
    const result = JSON.parse(http.responseText);
    console.log(result);
}

const redditContent = document.querySelector('.content');
redditConten.appendChild


http.open('GET', `${host}/api/posts`, true);
http.send();
