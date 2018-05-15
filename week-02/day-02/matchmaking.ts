export {}

'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];
let match: string [] = [];

function makingMatches(girls, boys) {
    for (let i: number = 0; i < girls.length; i++) {
        match.push(girls[i]);
        match.push(boys[i]);
    }
    return match
}

console.log(makingMatches(girls, boys));

export = makingMatches;