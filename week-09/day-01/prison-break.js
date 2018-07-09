'use strict';

// Create a prison function, that has your name as a private fugutive variable
// The function should return an object that has two methods:
//  - visit() // logs "[yourname] is visited [x] time(s)" to the console.
//    - the [x] times displayes the numbers the function is called
//    - If the fugitive variable is empty, then display "Nobody is here anymore"
//  - escape() // logs "BREAKING NEWS, [yourname] escaped the prison" to the console.
//    - it should empties the fugitive variable


function prison(myName) {
  let name = myName;
  let counter = 0;
  
  const visit = () => {
    if (name !== '') {
      counter += 1;
      console.log(`${myName} is visited ${counter} time(s).`);
    } else if (name === '') {
      console.log(`Nobody is here anymore`);
    }
  }
  const escape = () => {
    console.log(`BREAKING NEWS, ${myName} escaped the prison`);
  }
  return { visit, escape };
}

const alcatraz = prison('Sad Panda');
alcatraz.visit(); // Sad Panda is visited 1 time(s)
alcatraz.visit(); // Sad Panda is visited 2 time(s)
alcatraz.escape(); // BREAKING NEWS, Sad Panda escaped the prison
alcatraz.visit(); // Nobody is here anymore
