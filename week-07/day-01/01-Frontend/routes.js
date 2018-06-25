'use strict';

const express = require('express');
const app = express();

app.use(express.json()); // ha req.body-t akarok olvasni
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');//ha a key - value pár kifejezése megegyezik, elegendő egyszer kiírni
});

app.get('/doubling/', (req, res) => {
  console.log(req.query)
  if (req.query.input) {
    res.json({

      received: req.query.input,
      result: req.query.input * 2,
    });
  } else {
    res.json({
      error: "Please provide an input!"
    })
  }
});

app.get('/greeter', (req, res) => {
  console.log(req.query)
  if (!req.query.name) {
    res.json({                         //json úgy viselkedik, mint a return. Megáll a feltételnél és nem megy tovább
      error: "Please provide a name!"
    })
  }
  if (!req.query.title) {
    res.json({
      error: "Please provide a title!"
    })
  }
  res.json({
    welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
  })
})

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable) {
    res.json({
      appended: req.params.appendable + 'a' // változót nem tudok queryzni. Ha ?vmi akkor query-vel kérdezem le, ha : akkor params-szal
    })
  } else {
    res.status(404)
      .send('Not found');
  }
})

app.post('/dountil/:what', function (req, res) { 
  if (req.params.what === 'sum') {  
    res.json({
      result: counter(req.body.until)
    })
  } else if (req.params.what === 'factor') {
    res.json({
      result: refactorio(req.body.until) // A Postmanben meg kell adni a számot a body-nak POST -> {"until": 4}-> send
    })
  } else {
    res.json({
      error: "Please provide a number!"
    })
  }
})

function counter(n) {
  if (n > 0) {
    console.log(n);
    return n + counter(n - 1);
  } else {
    return n;
  }
}

function refactorio(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * refactorio(n - 1);
  }
}

module.exports = app;