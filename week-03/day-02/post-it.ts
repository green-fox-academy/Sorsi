'use strict'

/* Create a PostIt a class that has
- a backgroundColor
- a text on it
- a textColor
Create a few example post-it objects:
- an orange with blue text: "Idea 1"
- a pink with black text: "Awesome"
- a yellow with green text: "Superb!" */

class PostIt {
  name: string = '';
  backgroundColor: string = '';
  text: string = '';
  textColor: string = '';

  constructor(name: string) {
    this.name = name;
    if (name === 'postit1') {
      this.backgroundColor = 'orange';
      this.text = 'Idea1';
      this.textColor = 'blue';
    } else if (name === 'postit2') {
      this.backgroundColor = 'pink';
      this.text = 'Awesome';
      this.textColor = 'black';
    } else if (name === 'postit3') {
      this.backgroundColor = 'yellow';
      this.text = 'SuperB!';
      this.textColor = 'green';
    }
  }
}

let postit1 = new PostIt('postit1');
let postit2 = new PostIt('postit2');
let postit3 = new PostIt('postit3');

console.log(postit1)
console.log(postit2)
console.log(postit3)