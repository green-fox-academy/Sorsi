'use strict'

/* 
Create a BlogPost class that has
an authorName
a title
a text
a publicationDate
Create a few blog post objects:
"Lorem Ipsum" titled by John Doe posted at "2000.05.04."
Lorem ipsum dolor sit amet.
"Wait but why" titled by Tim Urban posted at "2010.10.10."
A popular long-form, stick-figure-illustrated blog about almost everything.
"One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.
*/

class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(authorName: string) {
    this.authorName = authorName;
    if (authorName === 'John Doe') {
      this.title = '"Lorem Ipsum"';
      this.text = 'Lorem ipsum dolor sit amet.';
      this.publicationDate = '"2000.05.04."';
    } else if (authorName === 'Tim Urban') {
      this.title = '"Wait but why"';
      this.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
      this.publicationDate = '"2010.10.10."'
    } else if (authorName === 'William Turton') {
      this.title = '"One Engineer Is Trying to Get IBM to Reckon With Trump"';
      this.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
      this.publicationDate = '"2017.03.28."'      
    }
  }
}

let blogpost1 = new BlogPost('John Doe');
let blogpost2 = new BlogPost('Tim Urban');
let blogpost3 = new BlogPost('William Turton');

console.log(`${blogpost1.title} titled by ${blogpost1.authorName} posted at ${blogpost1.publicationDate} \r\n ${blogpost1.text}`)
console.log(`${blogpost2.title} titled by ${blogpost2.authorName} posted at ${blogpost2.publicationDate} \r\n ${blogpost2.text}`)
console.log(`${blogpost3.title} titled by ${blogpost3.authorName} posted at ${blogpost3.publicationDate} \r\n ${blogpost3.text}`)