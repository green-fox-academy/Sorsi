'use strict';

import { test } from 'tape';
import { Summing } from './sum';

test('summing elements', t => {
  const list1 = new Summing([3, 4]);
  
  t.deepEqual(list1.getSum(), 7);
  t.end();
});

test('empty list', t => {
  const actual = new Summing([]);

  t.deepEqual(actual.getSum(), 0);
  t.end();
});

test('list only with one element', t => {
  const actual = new Summing([2]);

  t.deepEqual(actual.getSum(), 2);
  t.end();
});

test('list with multiple elements', t => {
  const actual = new Summing([2, 7, 8, 3]);

  t.deepEqual(actual.getSum(), 20);
  t.end();
});

test('list with a null in it', t => {
  const actual = new Summing([null]);

  t.deepEqual(actual.getSum(), 0);
  t.end();
});

test('list with a string element', t => {
  const actual = new Summing(['nulla']);

  t.deepEqual(actual.getSum(), 'Please type numbers in this array!');
  t.end();
});