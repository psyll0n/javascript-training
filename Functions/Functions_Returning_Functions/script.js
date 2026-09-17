'use strict';

/*
Functions Returning Functions   

This mechanism is also known as "Closure".
A closure is a function that has access to the parent function's scope, 
even after the parent function has returned.

*/

// Examples:

// A simple example of a function returning a function
const greet = function(greeting) {
    // greet() is the outer function
    // name is the inner function
    // greeting is the outer function's parameter
    // Outer function is returning an inner function
    return function(name) {
        console.log(`${greeting}` + ', ' + `${name}`);
    }
}

// Calling the function and storing the returned function in a variable
const greeting = greet('Hello');

greeting('Alex');
greeting('John');
greeting('Steve');

greet("Hey there")('Alex');


// The same can be written using arrow functions:
const greetArrow = greeting => name => console.log(`${greeting}` + ', ' + `${name}`);
// Calling the function and storing the returned function in a variable
greetArrow('Good Morning')('Alex');
greetArrow('Good Evening')('John');
greetArrow('Good Night')('Steve');