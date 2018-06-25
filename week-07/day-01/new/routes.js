'use strict';

const express = require('express');
const app = express();

let cars = [
  { id: 1, brand: 'BMW', type: 'X6' },
  { id: 2, brand: 'Audi', type: 'TT' },
];

app.use(express.json()); //mindenképpen kell ezt használni, innen tudja, h JSON-t küldünk

app.get('/api/cars', (req, res) => {
  res.json({
    cars: cars, //ha a key - value pár kifejezése megegyezik, elegendő egyszer kiírni
  });
});

app.get('/ping', (req, res) => { //1. lépés volt
  res.json({ //egy fileformátum a JSON
    message: 'pong',
  });
});

app.delete('/api/cars', (req, res) => { //kitöröljük az egyik elemet a már meglévő array-ből, az utolsót a POP funkcióval
  cars.pop();
  res.json({
    message: 'Car has been deleted.',
  });
});

app.delete('/api/cars/:id', (req, res) => { //kitörölünk egy adott ID-vel rendelkező autót a már meglévő array-ből
  let carIndex = -1;
  cars.forEach((car, index) => {
    if (car.id === parseInt(req.params.id)) { //ez egy string, de az objectemben lévő adat number, ezért átalakítom stringgé a parseInt-tel
      carIndex = index;
    }
  });

  //console.log(carIndex);

  let message = '';
  if (carIndex !== -1) {
    cars.splice(carIndex, 1);
    message = 'Car has been deleted.';
  } else {
    message = 'This car is not in the array';
  }

  res.json({
    message, // message: message
  });

  /* res.json({
    message: 'Car has been deleted.',
  }); */
});

/* app.post('/api/cars', (req, res) => { //ez egy endpoint
  console.log(req.body);
  cars.push({  //eltároljuk az új kocsi adatait
    id: cars.length + 1,
    brand: req.body.brand,
    type: req.body.type,
  }); */

app.post('/api/cars', (req, res) => { //ez egy endpoint
  const { brand, type } = req.body;
  cars.push({  //eltároljuk az új kocsi adatait
    id: cars.length + 1,
    brand: brand, //itt is elhagyható a brand, elég egyszer kiírni
    type,
  });

  res.json({
    message: 'OK',
  })
});

module.exports = app; // exportálni kell, h a test file tudja használni