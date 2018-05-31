'use strict';

import { test } from 'tape';
import { getApple } from './apples'

test('is it an apple?', t => {
  const actual = getApple('apple');
  const expected = 'apple';
  t.equal(actual, expected);
  t.end();
});

test('is it an apple?', t => {
  const actual = getApple('apple');
  const expected = 'banana';
  t.equal(actual, expected);
  t.end();
});

test('is it an apple?', t => {
  const actual = getApple('banana');
  const expected = 'banana';
  t.equal(actual, expected);
  t.end();
});