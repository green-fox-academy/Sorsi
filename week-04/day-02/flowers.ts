'use strict';

import { Plants } from './plants';

class Flowers extends Plants {
  constructor(flowerColor: string) {
    super(flowerColor);
    this.thresHold = 5;
  }
}

export { Flowers };