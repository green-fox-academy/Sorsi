'use strict'

import { test } from 'tape';
import { anagram } from './anagram';

test('Are theese two words anagrams?', t => {
    
  t.equal(anagram('kalap', 'pala'), false);
  t.end();
});