'use strict'

import { test } from 'tape';
import { Sharpie } from './sharpie';

test('Sharpie with right types of parameters', t => {
    let bambi = new Sharpie('red', 45);
  t.equal(bambi.use(), 99);
  t.end();
});

test('Are theese two words anagrams?', t => {
  let bambi = new Sharpie('red', 45);
t.equal(bambi.use(), 99);
t.end();
});