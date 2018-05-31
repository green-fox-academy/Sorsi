'use strict';

//import { Domino } from '../../week-03/day-02/domino';
import { initializeDominoes } from '../../week-03/day-02/dominoes';
import { Domino } from '../../week-03/day-02/domino';

interface Printable {
  printAllFields()
}



let dominoes = initializeDominoes();

initializeDominoes()
for (let domino of dominoes) {
  domino.printAllFields();
}
