'use strict';

const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/api/title', true); //ezzel lekértem az adatot a serverről, ami már lekérte az adatot az adatbázisból

http.onload = () => {
 const data = JSON.parse(http.responseText);
 //console.log(data)
 
 let list = document.querySelector('ul');
 
 data.title.forEach((element) => {
   const listElement = document.createElement('li');
   list.appendChild(listElement).textContent = element.book_name;
  })
}

http.send();