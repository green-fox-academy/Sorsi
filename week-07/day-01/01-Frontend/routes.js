'use strict';

const express = require('express');
const app = express();

app.use(express.json()); // ha req.body-t akarok olvasni
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');//ha a key - value pár kifejezése megegyezik, elegendő egyszer kiírni
});
/* //----------DOUBLING------------------// */
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
/* //----------GREETER------------------// */
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
/* //----------APPENDA------------------// */
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
/* //----------DO UNTIL------------------// */
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
/* //----------ARRAY HANDLER------------------// */
app.post('/arrays', (req, res) => {
  let what = req.body.what;
  let result = 0;

  if (what === 'sum') {
    req.body.numbers.forEach(elem => {
      result += elem;
    });
  } else if (what === 'multiply') {
    result = 1;
    req.body.numbers.forEach(elem => {
      result *= elem;
    });
  } else if (what === 'double') {
    result = [];
    req.body.numbers.forEach(elem => {
      result.push(elem * 2);
    });
  } else {
    res.json({
      error: "Please provide what to do with the numbers!"
    });
  }
});

module.exports = app;