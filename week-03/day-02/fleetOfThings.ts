'use strict'

//*import {Thing} from "./thing";*/
import {Fleet} from "./fleet";
import { Thing } from "./thing";

let fleet = new Fleet();
//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */

let milk = new Thing('Get milk');
let obst = new Thing('Remove the obstacles');
let stnd = new Thing('Stand up');
let lnch = new Thing('Eat lunch');
stnd.complete();
lnch.complete();

fleet.add(milk);
fleet.add(obst);
fleet.add(stnd);
fleet.add(lnch);


for (let i: number = 0; i < fleet.things.length; i++) {
  if (fleet.things[i].completed) {
     console.log(`${i+1} [x] ${fleet.things[i].name}`)
  } else {
    console.log(`${i+1} [ ] ${fleet.things[i].name}`)
  }
}