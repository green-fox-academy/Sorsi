'use strict';

const tBody = document.querySelector('tbody');
const inputName = document.querySelector('input[name="attr_name"]');
const inputCity = document.querySelector('input[name="city"]');
const inputPrice = document.querySelector('input[name="price"]');
const inputCategory = document.querySelector('input[name="category"]');
const inputLongitude = document.querySelector('input[name="longitude"]');
const inputLattitude = document.querySelector('input[name="lattitude"]');
const inputRecAge = document.querySelector('input[name="recommended_age"]');
const inputDuration = document.querySelector('input[name="duration"]');
const form = document.querySelector('form');
/* A formba bevitt adatokat kezeljük a submit gombra kattintva küldünk egy kérést a servernek?*/
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const xhrPost = new XMLHttpRequest();
  xhrPost.open('POST', '/add');
  xhrPost.setRequestHeader('Content-Type', 'application/json'); //visszaalakítjuk az adatot JSON-ná RequestHeader?
  /* const { attr_name, city, category, price, longitude, lattitude, recommended_age, duration } = e.target.elements --> ez a sor kiváltja a e.target.elements-eket alább*/
  xhrPost.send(JSON.stringify({ // aztán visszaalakítjuk?? 
    name: e.target.elements.attr_name.value,
    city: e.target.elements.city.value,
    category: e.target.elements.category.value,
    price: e.target.elements.price.value,
    longitude: e.target.elements.longitude.value,
    lattitude: e.target.elements.lattitude.value,
    recommendedAge: e.target.elements.recommended_age.value,
    duration: e.target.elements.duration.value
  }));
});

/* 2. lépés */
function createTableBody(rows) {
  rows.forEach((row) => { //ha map-et használunk nem kell a második (), ami a row körül van most
    const tr = document.createElement('tr');
    Object.keys(row).forEach((key) => {
      if (key !== 'id') {
        let td = document.createElement('td');
        td.textContent = row[key];
        tr.appendChild(td);
      }
    });

    const button = document.createElement('button');
    button.value = 'Edit';
    button.addEventListener('click', () => {
      Object.keys(row).forEach((key) => {
        if (key !== 'id') {
          const input = document.querySelector(`input[name="${key}"]`);
          input.value = row[key];
        }
      });
      inputName.value = row.attr_name;
      inputCity.value = row.city;
      inputPrice.value = row.price;
      inputCategory.value = row.category;
      inputLongitude.value = row.longitude;
      inputLattitude.value = row.lattitude;
      inputRecAge.value = row.recommended_age;
      inputDuration.value = row.duration;
    });

    tr.appendChild(button);
    tBody.appendChild(tr);
  });
}
/* 2. lépés B verzió */
function createTableBody2(rows) {
  rows.forEach((row) => {
    const tr = document.createElement('tr');

    const td_name = document.createElement('td');
    td_name.innerText = row.attr_name;
    tr.appendChild(td_name);

    const td_city = document.createElement('td');
    td_city.innerText = row.city;
    tr.appendChild(td_city);

    const td_category = document.createElement('td');
    td_category.innerText = row.category;
    tr.appendChild(td_category);

    const td_price = document.createElement('td');
    td_price.innerText = row.price;
    tr.appendChild(td_price);

    const td_lattitude = document.createElement('td');
    td_lattitude.innerText = row.lattitude;
    tr.appendChild(td_lattitude);

    const td_longitude = document.createElement('td');
    td_longitude.innerText = row.longitude;
    tr.appendChild(td_longitude);

    const td_recommended_age = document.createElement('td');
    td_recommended_age.innerText = row.recommended_age;
    tr.appendChild(td_recommended_age);

    const td_duration = document.createElement('td');
    td_duration.innerText = row.duration;
    tr.appendChild(td_duration);

    tBody.appendChild(tr);
  });
/* 1. lépés */
function pageLoad() {
  const httpReq = new XMLHttpRequest();
  httpReq.open('GET', '/attractions');
  httpReq.onload = () => {
    const response = JSON.parse(httpReq.responseText);
    //createTableBody(response);
    createTableBody2(response);
  }
  httpReq.send();
}

pageLoad();