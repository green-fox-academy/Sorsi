'use strict';

import { Plants } from './plants';

class Trees extends Plants {
  constructor(treeColor: string) {
    super(treeColor);
    this.thresHold = 10;
  }
}

export { Trees };