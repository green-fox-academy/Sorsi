export {}


console.log('Hello, world!');

//String
let welcome: string = 'Hello, World';
console.log(welcome);

//Boolean
let isAwesome: boolean = true;
console.log(isAwesome);

//Integer
let theMeaningOfLifeAneTheUniverseAndEverything: number = 42;
console.log(theMeaningOfLifeAneTheUniverseAndEverything);

// Floating point number
let pi: number = 3.141592;
console.log(pi);

// Assigning and creating a variable (define its value)
let number: number = 12;
console.log(number);

// Mutate a variable 
number = 23;

// Any
let dynamic: any = 5;
dynamic = true;
dynamic = 'strange';
console.log(dynamic);

let a: number = 12;
a = a + 4;
console.log(a);

let b: number = 12;
b = b - 4;
console.log(b);

let h: number = 10;
console.log(h); // Prints 10
console.log(h++); // Prints 10
console.log(h); // Prints 11