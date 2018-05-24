'use strict'

/*
Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies
*/

import {Sharpie} from "./sharpie";

class SharpieSet {
  public sharps: Sharpie[];
  
  constructor() {
    this.sharps = [];
  }
}