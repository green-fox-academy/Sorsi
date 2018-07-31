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
  let matrix = req.body.matrix;
  let sql = `INSERT INTO matrix (matrixNumbers) VALUES ('${req.body.matrixNumbers}');`;
  conn.query(sql, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.json({
      status: 'OK',
    })
  });
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