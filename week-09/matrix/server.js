'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'exam',
});

app.use(express.json());
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/matrix', (req, res) => {
  let splitMatrix = [];
  let isSquareMatrix = true;

  if (req.body.matrixNumbers === '' || req.body.matrixNumbers.length === 0) {
    res.status(403).send({
      message: 'Please insert numbers!'
    });
  } else {
    let matrix = req.body.matrixNumbers.split('\n')
    matrix.forEach((e) => {
      splitMatrix.push(e.split(' '));
    });

    splitMatrix.forEach((elem) => {
      if (elem.length !== matrix.length) {
        isSquareMatrix = false;
      }
    });

    if (!isSquareMatrix) {
      res.status(403).send({
        message: 'This is not a valid matrix. Please, try again!'
      })
    } else {
      let sql = `INSERT INTO matrix (matrixNumbers) VALUES ('${req.body.matrixNumbers}');`;
      conn.query(sql, (err) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
        res.send({
          message: 'OK, this is a squared matrix. Thank you!',
        });
      });
    }
  }
});

app.get('/matrices', (req, res) => {
  let sql = `SELECT * FROM matrix;`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running, running, running...on PORT ${PORT}`);
});