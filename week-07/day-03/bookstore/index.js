require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/api/title', (req, res) => {
  let sql = 'SELECT book_name FROM book_mast;';  // az meglévő bookstore adatbázisból kiválasztjuk az összes * authort
 /*  let queryInputs = [];

  if (req.query.book_id) {
    sql = 'SELECT * from book_mast WHERE book_id = ?;';
    queryInputs = [req.query.book_id];
  } */

  app.get('/api/title/full', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  })

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      /* res.sendStatus(500); */  //ez ugyanaz, mint az előző sor
      return;
    }

    res.json({ //ha minden rendben, küldje el a táblázat sorait
      title: rows,
    });
  });
});

app.get('/', (req, res) => {   //lepasszolom az html-nek
  res.sendfile(__dirname + '/index.html')
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});