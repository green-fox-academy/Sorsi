'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.json());
app.use('/views', express.static('views'));
app.use('/static', express.static('static'));


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quiz',
});

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'views/game.html'));
});

app.get('/', (req, res) => {
  res.json({
    message: 'HIIII',
  });
});
//a question tableből kiválasztok egy random kérdést: random sorrendbe teszem az sql választ
//This endpoint should return a random question with its answers.
app.get('/game', (req, res) => {
  let sql = 'SELECT * FROM questions ORDER BY RAND() LIMIT 1;';
  conn.query(sql, (err, questions) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    let queryInput = questions[0].id;
    conn.query('SELECT * FROM answers WHERE question_id = ?;', queryInput, (err, answers) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        id: questions[0].id,
        question: questions[0].question,
        answers,
      });
    });
  });
});
//This endpoint should return all the questions.
app.get('/questions', (req, res) => {
  conn.query('SELECT * FROM questions;', (err, questions) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.json({
      questions,
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server is running, running, running on port ${PORT}`);
});