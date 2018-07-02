'use strict';

const test = require('tape');

flip = require('.poker.js');

test('draw', (t) => {
  t.equal(flip(), 'Draw!');
  t.end();
});