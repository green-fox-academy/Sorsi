'use strict';

const mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
//kilogolok bmit a serverre
app.get('/', (req, res) => {
  res.send('Hello');
});
//beállítjuk a kapcsolatot a mysql adatbázissal
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'MacrotisOrientationExam'
});
//mivel ejs templatet használunk, be kell állítani, hogy használja az ejs filet
app.use('view engine', 'ejs');
app.use('/assets', express.static('assets')) // első /assets ami a html-ben van, 2. assets a mappa neve, amiben van a file DOM index.html-hez
//felállítjuk az első endpointot ejs-sel
/* app.get('/', (req, req) => {
  let sql = 'SELECT * FROM attractions;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }    
    res.render('home', {
      data: rows,
    });
  });
}); */

//ugyanúgy kiküldjük a tábla adatait, de most nem EJS-sel, hanem DOM-mal
app.get('/', (req, res) => {
  let sql = 'SELECT * FROM attractions;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }    
    /* res.sendFile('./assets/index.html') */
    res.sendFile(path.join(__dirname, '/views/index.html')); // ugyanaz mint az előző sor
  });
});
//új endpointot készítünk az attraction-ra, listázza ki az összes adatot a táblázatból
app.get('/attractions', (req, res) => {
  let sql = 'SELECT * FROM attractions;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json(rows);
  });
});
/* 4. lépés: így készül a post  */
/* function checkKeys(req) {
  return (
    req.body.name !== undefined && req.body.name !== '' &&
    req.body.city !== undefined && req.body.city !== '' &&
    req.body.category !== undefined && req.body.category !== '' &&
    req.body.price !== undefined && req.body.price !== '' &&
    req.body.longitude !== undefined && req.body.longitude !== '' &&
    req.body.lattitude !== undefined && req.body.lattitude !== '' &&
    req.body.recommendedAge !== undefined && req.body.recommendedAge !== '' &&
    req.body.duration !== undefined && req.body.duration !== '' &&
  )
}

app.post('/add', (req, res) => {
  if (checkKeys(req)) {
    let sql = 
  }
}); */

//server fusson
app.listen(PORT, () => {
  console.log(`Up and running on PORT ${PORT}`);
});