'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('ping endpoint', (t) => {
  request(app) // az appomat szeretném tesztelni
  .get('/ping') //ezt a funkcióját
  .expect('Content-Type', /json/) // ezt várom
  .expect(200, { message: 'pong'}) // ide nem teszek ; mert az előzőre hivatkozik
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});