export {}

'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function isItSeven(currentValue: any) {
    return currentValue !== 7;
}
if (numbers.every(isItSeven)) {
    console.log('Noooo');
} else {
    console.log('Hooray');
}

function isItSeven2(value: any) {
    return value === 7;
}
if (numbers.some(isItSeven2)) {
    console.log('Hoooray')
} else {
    console.log('Nooo')
}
if (numbers.every(value => {return value !== 7;})) {
    console.log('Noooo');
} else {
    console.log('Hooray');
}
