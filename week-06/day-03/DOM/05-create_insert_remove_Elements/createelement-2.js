'use strict';

let asteroidList = document.querySelector('ul.asteroids');
console.log(asteroidList);
let kingAsteroid = document.querySelector('li');
asteroidList.removeChild(kingAsteroid);

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

for (let i = 0; i < planetData.length; i++) {  
  if (planetData[i].asteroid) {
    const li = document.createElement('li');
    li.classList.add(planetData[i].category);
    li.innerHTML = planetData[i].content;
    document.querySelector('ul').appendChild(li);
  }
}
