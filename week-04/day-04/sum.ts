'use strict';

export class Summing {
  list: number[];

  constructor(startList: any[]) {
    this.list = startList;
  }

  public getSum(): any {
    let finalresult: number = 0;
    for (let i: number = 0; i < this.list.length; i++) {
      if (typeof this.list[i] !== 'number') {
        return 'Please type numbers in this array!';
      }
      else {
        finalresult += this.list[i];
      }
    }
    return finalresult;
  }

let list1 = new Summing([1, 2, 5]);

console.log(list1.getSum());
