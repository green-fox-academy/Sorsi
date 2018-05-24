'use strict'

import {Thing} from "./thing";

class Fleet {
    public things: Thing[];

    constructor(){
      this.things = [];
    }
    add(thing: Thing){
        this.things.push(thing);
    }
}

export {Fleet};