'use strict';

/*
First-Class vs Higher-Order Functions

First-Class Functions: Functions are treated as first-class citizens. This means that
functions can be stored in variables, passed as arguments to other functions, and returned 
from other functions.

Higher-Order Functions: Functions that can accept other functions as arguments or return 
functions as values are called higher-order functions.
*/

// Examples:

// A Higher-order function is a function that receives another function as an argument
// We are passing the greet function as an argument to the addEventListener function.


// OR returns a function.
function count() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
}

const add = function (a, b) {
    return a + b;
}

const multiply = function (a, b) {
    return a * b;
}

const applyOperation = function (a, b, operation) {
    return operation(a, b);
}

console.log(applyOperation(2, 3, add));
console.log(applyOperation(2, 3, multiply));


const counter = {
    value: 23,
    // This is a method, not a function.
    // A method is a function that is a property of an object.
    inc: function () {
        this.value++;
    }
}

console.log(counter);

// Functions we want to pass as arguments
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// A higher-order function that calls the callback function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
    return fn(str);
}

// Passing the callback function as an argument
console.log(transformer('hello world', upperFirstWord));
console.log(transformer('hello world', oneWord));

// Another example of a higher-order function
const highFive = function () {
    console.log('👋');
}

// Adding an event listener to the body triggers the highFive function.
// Here, addEventListener is the higher-order function, and highFive is the callback function.
// JS uses callback functions a lot.
document.body.addEventListener('click', highFive);

['Alex', 'John', 'Steve', 'Ann', 'Claire'].forEach(highFive);


