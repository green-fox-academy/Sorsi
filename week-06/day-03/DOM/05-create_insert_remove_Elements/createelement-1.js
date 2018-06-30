'use strict';

let asteroidList = document.querySelector('ul.asteroids');

let newAsteroid = document.createElement('li');
let lampLighter = document.createElement('li');
lampLighter.textContent = 'The Lamplighter';
newAsteroid.textContent = 'The GF'
asteroidList.appendChild(newAsteroid);
asteroidList.appendChild(lampLighter);

let containerList = document.querySelector('div.container');
console.log(containerList)
let newHeading = document.createElement('h1');
newHeading.innerText = 'I can add elements to the DOM!'
containerList.appendChild(newHeading);

let newImage = document.createElement('img');
containerList.appendChild(newImage);
newImage.setAttribute('src', 'https://i.pinimg.com/736x/a5/7a/32/a57a32b45c21edbfb21e9e256d36649d--cute-boxer-puppies-doggies.jpg');
