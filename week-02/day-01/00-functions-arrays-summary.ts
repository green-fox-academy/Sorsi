function sayHello () {
    console.log('Hello World!');
}

function greet(greetStr: string, nameStr: string = 'GFA', opt?: boolean): void {
    if (opt)
    console.log('I have an optional arg.');
    /*
    console.log(`${greetStr} ${nameStr}!`)
    */
;}

function multiply(a: number, b: number): number {
     // let result = a * b
    return a* b;
}

const sum = function(a: number, b: number): number {
    return a + b;
}

sayHello();
greet('Hello', 'Secret');
console.log(multiply(2, 5));
console.log(sum(20, 17));



/* show the type of the variable

typeof
parseInt
parseFloat
random 
Math.square // these are built -in functions
*/

console.log(typeof parseInt('2'));

let myArray: string[] = ['Morzsi', 'Pötyi', 'Csibész'];
console.log(myArray[0]);

/*
myArray.push('Mancs');
console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length -1]);
// myArray[myArray.length +1] = 'Vau';
// console.log(myArray);
// console.log(myArray[4]);
myArray.unshift('Vau');  // add new item to the first place
console.log(myArray);

const value = myArray.shift();
console.log(myArray);
console.log(value);

const lastValue = myArray.shift();
console.log(myArray);
console.log(lastValue);

console.log(myArray.indexOf('Pötyi'));


const newPets = myArray.slice(1, 3);
console.log(newPets);

myArray.splice(1, 0, 'Cézár');
console.log(myArray);

myArray.splice(1, 2, 'Cézár');
console.log(myArray);

console.log(myArray.concat(['Dog1', 'Dog2']));

//const array2 = myArray.concat([]);

*/

console.log(myArray);
for (let i: number = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

myArray.forEach(function(dog, index) {
    console.log(`#${index + 1}: ${dog}`);
});

myArray.forEach((dog, index) => {
    console.log(`#${index + 1}: ${dog}`);
});
/*
let helloDogs = myArray.map((dog, index) => {
    return `Hello, ${dog}`;
})
console.log(helloDogs);
*/
let helloDogs = myArray.map(dog => (`Hello, ${dog}`));
console.log(helloDogs);

const longNames = myArray.filter(function(dog) {
    return dog.length > 5;
})
console.log(longNames)

