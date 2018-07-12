'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use('/static', express.static('static'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quiz',
});
/* app.get('/', (req, res) => {
  res.json({
    message: 'HIIII',
  });
}); */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/game.html'));
});

app.get('/manage', (req, res) => {
  res.sendfile(path.join(__dirname, 'views/questions.html'));
});

//a question tableből kiválasztok egy random kérdést: random sorrendbe teszem az sql választ
//This endpoint should return a random question with its answers.
//limit 1 -> 1 sort ad vissza
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
//If you fill the form And click on the submit button It should add a new question And update the questions
app.post('/questions', (req, res) => {
  let sqlQ = 'INSERT INTO qestions (question) VALUES (?)';
  let queryInputQ = [req.body.question];
  conn.query(sglQ, queryInputQ, (err, question) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    conn.query('SELECT id FROM questions ORDER BY id DESC;', (err, newId) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      req.body.answers.forEach(answer => {
        let sqlA = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?);';
        let queryInputA = [newId[0].id, answer.value, answer.is_correct];

        conn.query(sqlA, queryInputA, (err, data) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
          }
        });
      });
      res.json({
        status: 'ok',
      });
    });
  });
});
//It should delete the question and its answers
app.delete('/questions/:id', (req, res) => {
  let sql = `DELETE FROM questions WHERE id = '${req.params.id}';`;
  //let queryInput = [req.params.id];
  conn.query(sql, /* queryInput, */(err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    sql = `DELETE FROM answers WHERE question_id = ${req.params.id}`;
    conn.query(sql, queryInput, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        status: 'ok',
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running, running, running on port ${PORT}`);
});