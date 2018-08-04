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
  password: process.env.DB_PASSWORD,
  database: 'practiceTat',
});

app.use(express.json());
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/:id', (req, res) => {
  let sql = `SELECT * FROM poeple WHERE id = '${req.params.id}';`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      rows,
    });
  });
});

app.put('/modify/:id', (req, res) => {
  let sql = `UPDATE poeple SET name = '${req.body.name}', email = '${req.body.email}', candies_in_store = '${req.body.candies_in_store}', phone_number = '${req.body.phone_number}';`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      message: `People database ID: ${req.params.id} has updated`,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running, running, running...on port ${PORT}`);
});